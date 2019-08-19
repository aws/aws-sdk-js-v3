import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRandomPasswordOutput shape
 */
export interface GetRandomPasswordOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string with the generated password.</p>
   */
  RandomPassword?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
