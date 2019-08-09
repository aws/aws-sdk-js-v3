import { _UnmarshalledDocumentVersionMetadata } from "./_DocumentVersionMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDocumentVersionOutput shape
 */
export interface GetDocumentVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The version metadata.</p>
   */
  Metadata?: _UnmarshalledDocumentVersionMetadata;

  /**
   * <p>The custom metadata on the document version.</p>
   */
  CustomMetadata?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
