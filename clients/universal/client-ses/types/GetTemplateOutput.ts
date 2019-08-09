import { _UnmarshalledTemplate } from "./_Template";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTemplateOutput shape
 */
export interface GetTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The content of the email, composed of a subject line, an HTML part, and a text-only part.</p>
   */
  Template?: _UnmarshalledTemplate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
