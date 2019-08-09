import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.</p>
 */
export interface GetAccountSendingEnabledOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.</p>
   */
  Enabled?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
