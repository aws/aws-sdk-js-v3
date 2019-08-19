import { _UnmarshalledContainerInstance } from "./_ContainerInstance";
import { _UnmarshalledFailure } from "./_Failure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateContainerInstancesStateOutput shape
 */
export interface UpdateContainerInstancesStateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of container instances.</p>
   */
  containerInstances?: Array<_UnmarshalledContainerInstance>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
