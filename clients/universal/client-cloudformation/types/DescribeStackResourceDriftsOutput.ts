import { _UnmarshalledStackResourceDrift } from "./_StackResourceDrift";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackResourceDriftsOutput shape
 */
export interface DescribeStackResourceDriftsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where AWS CloudFormation detects drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that have not yet been checked for drift are not included. Resources that do not currently support drift detection are not checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   */
  StackResourceDrifts: Array<_UnmarshalledStackResourceDrift>;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>DescribeStackResourceDrifts</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
