import { _UnmarshalledFailedRemediationBatch } from "./_FailedRemediationBatch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutRemediationConfigurationsOutput shape
 */
export interface PutRemediationConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of failed remediation batch objects.</p>
   */
  FailedBatches?: Array<_UnmarshalledFailedRemediationBatch>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
