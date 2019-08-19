import { _UnmarshalledNamespaceSummary } from "./_NamespaceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNamespacesOutput shape
 */
export interface ListNamespacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that contains one <code>NamespaceSummary</code> object for each namespace that matches the specified filter criteria.</p>
   */
  Namespaces?: Array<_UnmarshalledNamespaceSummary>;

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>AWS Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's possible that no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that subsequent groups of <code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p> </note>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
