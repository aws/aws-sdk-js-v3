import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConfigOutput shape
 */
export interface GetConfigOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The type of credentials.</p>
   */
  ConfigType?: string;

  /**
   * <p>The chrystoki.conf configuration file.</p>
   */
  ConfigFile?: string;

  /**
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   */
  ConfigCred?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
