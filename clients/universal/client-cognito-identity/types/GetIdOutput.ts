import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returned in response to a GetId request.</p>
 */
export interface GetIdOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
