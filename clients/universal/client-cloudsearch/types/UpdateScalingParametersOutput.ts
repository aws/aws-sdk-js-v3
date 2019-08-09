import { _UnmarshalledScalingParametersStatus } from "./_ScalingParametersStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>
 */
export interface UpdateScalingParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   */
  ScalingParameters: _UnmarshalledScalingParametersStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
