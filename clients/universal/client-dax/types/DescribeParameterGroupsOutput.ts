import { _UnmarshalledParameterGroup } from "./_ParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeParameterGroupsOutput shape
 */
export interface DescribeParameterGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of parameter groups. Each element in the array represents one parameter group.</p>
   */
  ParameterGroups?: Array<_UnmarshalledParameterGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
