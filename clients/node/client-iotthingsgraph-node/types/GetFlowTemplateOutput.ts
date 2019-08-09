import { _UnmarshalledFlowTemplateDescription } from "./_FlowTemplateDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFlowTemplateOutput shape
 */
export interface GetFlowTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The object that describes the specified workflow.</p>
   */
  description?: _UnmarshalledFlowTemplateDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
