import { formatUrl } from "@aws-sdk/util-format-url";
import { HttpRequest } from "@smithy/protocol-http";
import { SignatureV4 } from "@smithy/signature-v4";
import {
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

    this.credentials = runtimeConfiguration.credentials;
    this.hostname = runtimeConfiguration.hostname;
    this.port = runtimeConfiguration.port;
    this.region = runtimeConfiguration.region;
    this.sha256 = runtimeConfiguration.sha256;
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
}
