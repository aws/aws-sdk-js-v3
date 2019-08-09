import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateConferenceProviderOutput shape
 */
export interface CreateConferenceProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the newly-created conference provider.</p>
   */
  ConferenceProviderArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
