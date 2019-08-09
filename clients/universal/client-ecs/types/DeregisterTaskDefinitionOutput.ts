import { _UnmarshalledTaskDefinition } from "./_TaskDefinition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterTaskDefinitionOutput shape
 */
export interface DeregisterTaskDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of the deregistered task.</p>
   */
  taskDefinition?: _UnmarshalledTaskDefinition;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
