import { _UnmarshalledEngineDefaults } from "./_EngineDefaults";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEngineDefaultParametersOutput shape
 */
export interface DescribeEngineDefaultParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. </p>
   */
  EngineDefaults?: _UnmarshalledEngineDefaults;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
