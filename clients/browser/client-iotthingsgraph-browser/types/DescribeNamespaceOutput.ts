import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNamespaceOutput shape
 */
export interface DescribeNamespaceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the namespace.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The name of the public namespace that the latest namespace version is tracking.</p>
   */
  trackingNamespaceName?: string;

  /**
   * <p>The version of the public namespace that the latest version is tracking.</p>
   */
  trackingNamespaceVersion?: number;

  /**
   * <p>The version of the user's namespace to describe.</p>
   */
  namespaceVersion?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
