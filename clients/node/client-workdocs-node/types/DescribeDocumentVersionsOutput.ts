import { _UnmarshalledDocumentVersionMetadata } from "./_DocumentVersionMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentVersionsOutput shape
 */
export interface DescribeDocumentVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The document versions.</p>
   */
  DocumentVersions?: Array<_UnmarshalledDocumentVersionMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
