import { _UnmarshalledDocumentIdentifier } from "./_DocumentIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDocumentsOutput shape
 */
export interface ListDocumentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the Systems Manager documents.</p>
   */
  DocumentIdentifiers?: Array<_UnmarshalledDocumentIdentifier>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
