import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteNamespaceOutput shape
 */
export interface DeleteNamespaceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the namespace to be deleted.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace to be deleted.</p>
   */
  namespaceName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
