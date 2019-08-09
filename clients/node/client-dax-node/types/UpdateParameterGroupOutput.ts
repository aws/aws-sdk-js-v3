import { _UnmarshalledParameterGroup } from "./_ParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateParameterGroupOutput shape
 */
export interface UpdateParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The parameter group that has been modified.</p>
   */
  ParameterGroup?: _UnmarshalledParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
