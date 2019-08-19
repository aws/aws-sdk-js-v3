import { _UnmarshalledSystemTemplateSummary } from "./_SystemTemplateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSystemTemplateOutput shape
 */
export interface UpdateSystemTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing summary information about the updated system.</p>
   */
  summary?: _UnmarshalledSystemTemplateSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
