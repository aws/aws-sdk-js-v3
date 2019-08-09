import { _UnmarshalledTargetGroup } from "./_TargetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTargetGroupOutput shape
 */
export interface CreateTargetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the target group.</p>
   */
  TargetGroups?: Array<_UnmarshalledTargetGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
