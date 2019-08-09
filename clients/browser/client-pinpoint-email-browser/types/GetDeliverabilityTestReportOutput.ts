import { _UnmarshalledDeliverabilityTestReport } from "./_DeliverabilityTestReport";
import { _UnmarshalledPlacementStatistics } from "./_PlacementStatistics";
import { _UnmarshalledIspPlacement } from "./_IspPlacement";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The results of the predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the results of the predictive inbox placement test.</p>
   */
  DeliverabilityTestReport: _UnmarshalledDeliverabilityTestReport;

  /**
   * <p>An object that specifies how many test messages that were sent during the predictive inbox placement test were delivered to recipients' inboxes, how many were sent to recipients' spam folders, and how many weren't delivered.</p>
   */
  OverallPlacement: _UnmarshalledPlacementStatistics;

  /**
   * <p>An object that describes how the test email was handled by several email providers, including Gmail, Hotmail, Yahoo, AOL, and others.</p>
   */
  IspPlacements: Array<_UnmarshalledIspPlacement>;

  /**
   * <p>An object that contains the message that you sent when you performed this predictive inbox placement test.</p>
   */
  Message?: string;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with the predictive inbox placement test.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
