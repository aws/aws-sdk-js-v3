import { _UnmarshalledSamplingRuleRecord } from "./_SamplingRuleRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteSamplingRuleOutput shape
 */
export interface DeleteSamplingRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: _UnmarshalledSamplingRuleRecord;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
