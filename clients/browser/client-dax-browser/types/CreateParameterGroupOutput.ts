import { _UnmarshalledParameterGroup } from "./_ParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateParameterGroupOutput shape
 */
export interface CreateParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of a <i>CreateParameterGroup</i> action.</p>
   */
  ParameterGroup?: _UnmarshalledParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
