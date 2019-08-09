import { _UnmarshalledRuntimeConfiguration } from "./_RuntimeConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeRuntimeConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Instructions describing how server processes should be launched and maintained on each instance in the fleet.</p>
   */
  RuntimeConfiguration?: _UnmarshalledRuntimeConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
