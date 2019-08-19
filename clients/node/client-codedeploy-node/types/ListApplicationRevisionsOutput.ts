import { _UnmarshalledRevisionLocation } from "./_RevisionLocation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListApplicationRevisions operation.</p>
 */
export interface ListApplicationRevisionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of locations that contain the matching revisions.</p>
   */
  revisions?: Array<_UnmarshalledRevisionLocation>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
