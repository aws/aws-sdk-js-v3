import { _UnmarshalledSystemTemplateSummary } from "./_SystemTemplateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSystemTemplateOutput shape
 */
export interface CreateSystemTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The summary object that describes the created system.</p>
   */
  summary?: _UnmarshalledSystemTemplateSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
