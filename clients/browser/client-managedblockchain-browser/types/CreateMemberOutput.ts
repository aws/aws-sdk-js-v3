import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateMemberOutput shape
 */
export interface CreateMemberOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
