import { _UnmarshalledEnvironmentResourceDescription } from "./_EnvironmentResourceDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a list of environment resource descriptions.</p>
 */
export interface DescribeEnvironmentResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <a>EnvironmentResourceDescription</a>. </p>
   */
  EnvironmentResources?: _UnmarshalledEnvironmentResourceDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
