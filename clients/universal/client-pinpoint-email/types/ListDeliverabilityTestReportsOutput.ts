import { _UnmarshalledDeliverabilityTestReport } from "./_DeliverabilityTestReport";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.</p>
 */
export interface ListDeliverabilityTestReportsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains a lists of predictive inbox placement tests that you've performed.</p>
   */
  DeliverabilityTestReports: Array<_UnmarshalledDeliverabilityTestReport>;

  /**
   * <p>A token that indicates that there are additional predictive inbox placement tests to list. To view additional predictive inbox placement tests, issue another request to <code>ListDeliverabilityTestReports</code>, and pass this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
