import { _UnmarshalledTaskDefinition } from "./_TaskDefinition";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterTaskDefinitionOutput shape
 */
export interface RegisterTaskDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of the registered task definition.</p>
   */
  taskDefinition?: _UnmarshalledTaskDefinition;

  /**
   * <p>The list of tags associated with the task definition.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
