import { _UnmarshalledTargetGroupAttribute } from "./_TargetGroupAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyTargetGroupAttributesOutput shape
 */
export interface ModifyTargetGroupAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: Array<_UnmarshalledTargetGroupAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
