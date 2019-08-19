import { _UnmarshalledCreateAccountStatus } from "./_CreateAccountStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAccountOutput shape
 */
export interface CreateAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the request to create an account. This response structure might not be fully populated when you first receive it because account creation is an asynchronous process. You can pass the returned <code>CreateAccountStatus</code> ID as a parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of the request at later times. You can also check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  CreateAccountStatus?: _UnmarshalledCreateAccountStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
