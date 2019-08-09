import { _UnmarshalledInvitation } from "./_Invitation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListInvitationsOutput shape
 */
export interface ListInvitationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The invitations for the network.</p>
   */
  Invitations?: Array<_UnmarshalledInvitation>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
