import { _UnmarshalledLabelingJobForWorkteamSummary } from "./_LabelingJobForWorkteamSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLabelingJobsForWorkteamOutput shape
 */
export interface ListLabelingJobsForWorkteamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling job.</p>
   */
  LabelingJobSummaryList: Array<_UnmarshalledLabelingJobForWorkteamSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
