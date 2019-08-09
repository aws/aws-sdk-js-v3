import { _UnmarshalledSuggesterStatus } from "./_SuggesterStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>
 */
export interface DeleteSuggesterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the suggester being deleted.</p>
   */
  Suggester: _UnmarshalledSuggesterStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
