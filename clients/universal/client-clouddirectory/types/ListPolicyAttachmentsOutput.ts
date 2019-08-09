import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPolicyAttachmentsOutput shape
 */
export interface ListPolicyAttachmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
