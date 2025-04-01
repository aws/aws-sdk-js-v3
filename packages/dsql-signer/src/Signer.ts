import { formatUrl } from "@aws-sdk/util-format-url";
import { HttpRequest } from "@smithy/protocol-http";
import { SignatureV4 } from "@smithy/signature-v4";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider, ChecksumConstructor, Provider } from "@smithy/types";

import { getRuntimeConfig } from "./runtimeConfig";

/**
 * The possible actions for token generation.
 */
type DsqlSignerAction = "DbConnect" | "DbConnectAdmin";

export interface DsqlSignerConfig {
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
   * The region the database is located in.
   * Uses the region from the profile or inferred from the runtime if omitted.
   */
  region?: string;

  /**
   * The SHA256 hasher constructor to sign the request.
   */
  sha256?: ChecksumConstructor;

  /**
   * The amount of time in seconds the generated token is valid.
   */
  expiresIn?: number;

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
 * @public
 */
export class DsqlSigner {
  private readonly credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  private readonly hostname: string;
  private readonly protocol: string = "https:";
  private readonly region: string | Provider<string>;
  private readonly service: string = "dsql";
  private readonly sha256: ChecksumConstructor;
  private readonly expiresIn: number;

  constructor(configuration: DsqlSignerConfig) {
    const runtimeConfiguration = getRuntimeConfig(configuration);

    this.credentials = runtimeConfiguration.credentials;
    this.hostname = runtimeConfiguration.hostname;
    this.region = runtimeConfiguration.region;
    this.sha256 = runtimeConfiguration.sha256;
    this.expiresIn = runtimeConfiguration.expiresIn ?? 900;
  }

  private async _getAuthToken(action: DsqlSignerAction): Promise<string> {
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
      query: {
        Action: action,
      },
      headers: {
        host: `${this.hostname}`,
      },
    });

    const presigned = await signer.presign(request, {
      expiresIn: this.expiresIn,
    });

    // Dsql requires the protocol scheme be removed
    return formatUrl(presigned).replace(`${this.protocol}//`, "");
  }

  public async getDbConnectAuthToken(): Promise<string> {
    return this._getAuthToken("DbConnect");
  }

  public async getDbConnectAdminAuthToken(): Promise<string> {
    return this._getAuthToken("DbConnectAdmin");
  }
}
