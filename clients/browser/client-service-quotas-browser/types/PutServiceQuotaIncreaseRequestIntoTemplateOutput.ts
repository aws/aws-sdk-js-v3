import { _UnmarshalledServiceQuotaIncreaseRequestInTemplate } from "./_ServiceQuotaIncreaseRequestInTemplate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutServiceQuotaIncreaseRequestIntoTemplateOutput shape
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains information about one service quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: _UnmarshalledServiceQuotaIncreaseRequestInTemplate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
