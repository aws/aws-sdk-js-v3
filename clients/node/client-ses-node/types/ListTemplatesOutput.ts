import { _UnmarshalledTemplateMetadata } from "./_TemplateMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTemplatesOutput shape
 */
export interface ListTemplatesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES account.</p>
   */
  TemplatesMetadata?: Array<_UnmarshalledTemplateMetadata>;

  /**
   * <p>A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent call to <code>ListTemplates</code> to retrieve the next 50 email templates.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
