import { _UnmarshalledMemberSummary } from "./_MemberSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMembersOutput shape
 */
export interface ListMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>MemberSummary</code> objects. Each object contains details about a network member.</p>
   */
  Members?: Array<_UnmarshalledMemberSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
