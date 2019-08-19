import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContactAttributesOutput shape
 */
export interface GetContactAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attributes to update.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
