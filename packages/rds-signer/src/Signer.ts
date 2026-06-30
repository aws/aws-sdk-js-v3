import { formatUrl } from "@aws-sdk/core/util";
import { Sha256 } from "@smithy/core/checksum";
import { HttpRequest } from "@smithy/core/protocols";
import { SignatureV4 } from "@smithy/signature-v4";
import type {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  ChecksumConstructor,
  HashConstructor,
  Provider,
} from "@smithy/types";

import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export interface SignerConfig {
  /**
   * The AWS credentials to sign requests with.
   * Uses the default credential provider chain if not specified.
   */
  credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  /**
   * The hostname of the database to connect to.
   */
  hostname: string;
  /**
   * The port number the database is listening on.
   */
  port: number;
  /**
   * The region the database is located in.
   * Uses the region of the given profile or inferred from the runtime if
   * both are omitted.
   */
  region?: string;
  /**
   * The SHA256 hasher constructor to sign the request.
   */
  sha256?: ChecksumConstructor | HashConstructor;
  /**
   * The username to login as.
   */
  username: string;
  /**
   * Optional. Can be provided to configure region from a profile
   * if operating in an environment with a file system having
   * an AWS configuration file.
   *
   * The credentials will also resolve based on this profile, if using
   * a credentials provider that includes the AWS configuration file.
   */
  profile?: string;
}

const MINUTE_MS = 60_000;

/**
 * The signer class that generates an auth token to a database.
 */
export class Signer {
  private readonly credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  private readonly hostname: string;
  private readonly port: number;
  private readonly protocol: string = "https:";
  private readonly region: string | Provider<string>;
  private readonly service: string = "rds-db";
  private readonly sha256: ChecksumConstructor | HashConstructor;
  private readonly username: string;

  constructor(configuration: SignerConfig) {
    const runtimeConfiguration = __getRuntimeConfig(configuration);

    const creds = runtimeConfiguration.credentials;
    this.credentials = typeof creds === "function" ? this.createCredentialsWrapper(creds) : creds;
    this.hostname = runtimeConfiguration.hostname;
    this.port = runtimeConfiguration.port;
    this.region = runtimeConfiguration.region;
    this.sha256 = runtimeConfiguration.sha256 ?? Sha256;
    this.username = runtimeConfiguration.username;
  }

  public async getAuthToken(): Promise<string> {
    const signer = new SignatureV4({
      service: this.service,
      region: this.region,
      credentials: this.credentials,
      sha256: this.sha256,
    });

    const request = new HttpRequest({
      method: "GET",
      protocol: this.protocol,
      hostname: this.hostname,
      port: this.port,
      query: {
        Action: "connect",
        DBUser: this.username,
      },
      headers: {
        host: `${this.hostname}:${this.port}`,
      },
    });

    const presigned = await signer.presign(request, {
      expiresIn: 900,
    });

    // RDS requires the scheme to be removed
    // https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Connecting.html
    return formatUrl(presigned).replace(`${this.protocol}//`, "");
  }

  /**
   * Wraps a credential provider to force refresh when the resolved credentials
   * expire within 15 minutes. A presigned URL cannot outlive the credentials
   * used to sign it, so near-expiry credentials would produce a short-lived token.
   */
  private createCredentialsWrapper(provider: AwsCredentialIdentityProvider): AwsCredentialIdentityProvider {
    return async (identityProperties?: Record<string, any>) => {
      const credentials = await provider(identityProperties);
      if (credentials.expiration && credentials.expiration.getTime() - Date.now() < 15 * MINUTE_MS) {
        try {
          const refreshed = await provider({ ...identityProperties, forceRefresh: true });
          if (!refreshed.expiration || refreshed.expiration.getTime() - Date.now() >= 15 * MINUTE_MS) {
            return refreshed;
          }
        } catch {}
      }
      return credentials;
    };
  }
}
