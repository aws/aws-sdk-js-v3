import { _UnmarshalledAssociationVersionInfo } from "./_AssociationVersionInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAssociationVersionsOutput shape
 */
export interface ListAssociationVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about all versions of the association for the specified association ID.</p>
   */
  AssociationVersions?: Array<_UnmarshalledAssociationVersionInfo>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
