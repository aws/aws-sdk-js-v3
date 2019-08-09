import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectPoliciesOutput shape
 */
export interface ListObjectPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the object.</p>
   */
  AttachedPolicyIds?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
