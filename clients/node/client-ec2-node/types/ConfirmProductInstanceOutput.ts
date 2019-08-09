import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ConfirmProductInstanceOutput shape
 */
export interface ConfirmProductInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS account ID of the instance owner. This is only present if the product code is attached to the instance.</p>
   */
  OwnerId?: string;

  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product code is owned by the requester and associated with the specified instance.</p>
   */
  Return?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
