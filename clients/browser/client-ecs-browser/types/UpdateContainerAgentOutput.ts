import { _UnmarshalledContainerInstance } from "./_ContainerInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateContainerAgentOutput shape
 */
export interface UpdateContainerAgentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The container instance for which the container agent was updated.</p>
   */
  containerInstance?: _UnmarshalledContainerInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
