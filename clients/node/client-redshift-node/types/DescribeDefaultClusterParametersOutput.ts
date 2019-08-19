import { _UnmarshalledDefaultClusterParameters } from "./_DefaultClusterParameters";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDefaultClusterParametersOutput shape
 */
export interface DescribeDefaultClusterParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes the default cluster parameters for a parameter group family.</p>
   */
  DefaultClusterParameters?: _UnmarshalledDefaultClusterParameters;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
