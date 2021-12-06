import { Sha256 } from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";

export interface SignerInit {
  credentials?: Credentials | CredentialProvider;
  hostname: string;
  port: number;
  region: string;
  username: string;
}

export class Signer {
  private readonly credentials: Credentials | CredentialProvider;
  private readonly hostname: string;
  private readonly port: number;
  private readonly protocol: string = "https:";
  private readonly region: string;
  private readonly service: string = "rds-db";
  private readonly username: string;

  constructor({ credentials, hostname, port, region, username }: SignerInit) {
    this.credentials = credentials ?? defaultProvider();
    this.hostname = hostname;
    this.port = port;
    this.region = region;
    this.username = username;
  }

  public async getAuthToken(): Promise<string> {
    const signer = new SignatureV4({
      service: this.service,
      region: this.region,
      credentials: this.credentials,
      sha256: Sha256,
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

    return formatUrl(presigned).replace(`${this.protocol}//`, "");
  }
}
