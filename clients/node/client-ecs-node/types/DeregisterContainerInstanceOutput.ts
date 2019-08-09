import { _UnmarshalledContainerInstance } from "./_ContainerInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterContainerInstanceOutput shape
 */
export interface DeregisterContainerInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The container instance that was deregistered.</p>
   */
  containerInstance?: _UnmarshalledContainerInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
