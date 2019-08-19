import { _UnmarshalledSamplingTargetDocument } from "./_SamplingTargetDocument";
import { _UnmarshalledUnprocessedStatistics } from "./_UnprocessedStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSamplingTargetsOutput shape
 */
export interface GetSamplingTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Updated rules that the service should use to sample requests.</p>
   */
  SamplingTargetDocuments?: Array<_UnmarshalledSamplingTargetDocument>;

  /**
   * <p>The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call <a>GetSamplingRules</a> to get the latest version.</p>
   */
  LastRuleModification?: Date;

  /**
   * <p>Information about <a>SamplingStatisticsDocument</a> that X-Ray could not process.</p>
   */
  UnprocessedStatistics?: Array<_UnmarshalledUnprocessedStatistics>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
