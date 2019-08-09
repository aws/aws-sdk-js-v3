import { _UnmarshalledCustomVerificationEmailTemplate } from "./_CustomVerificationEmailTemplate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A paginated list of custom verification email templates.</p>
 */
export interface ListCustomVerificationEmailTemplatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the custom verification email templates that exist in your account.</p>
   */
  CustomVerificationEmailTemplates?: Array<
    _UnmarshalledCustomVerificationEmailTemplate
  >;

  /**
   * <p>A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to <code>ListTemplates</code> to retrieve the next 50 custom verification email templates.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
