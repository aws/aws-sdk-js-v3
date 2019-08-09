import { _UnmarshalledRevisionInfo } from "./_RevisionInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a BatchGetApplicationRevisions operation.</p>
 */
export interface BatchGetApplicationRevisionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the application that corresponds to the revisions.</p>
   */
  applicationName?: string;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;

  /**
   * <p>Additional information about the revisions, including the type and location.</p>
   */
  revisions?: Array<_UnmarshalledRevisionInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
