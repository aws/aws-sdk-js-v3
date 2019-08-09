import { _UnmarshalledFlowTemplateSummary } from "./_FlowTemplateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFlowTemplateOutput shape
 */
export interface CreateFlowTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The summary object that describes the created workflow.</p>
   */
  summary?: _UnmarshalledFlowTemplateSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
