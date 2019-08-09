import { _UnmarshalledDocumentDefaultVersionDescription } from "./_DocumentDefaultVersionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDocumentDefaultVersionOutput shape
 */
export interface UpdateDocumentDefaultVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The description of a custom document that you want to set as the default version.</p>
   */
  Description?: _UnmarshalledDocumentDefaultVersionDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
