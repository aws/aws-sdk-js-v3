import { _UnmarshalledProposalSummary } from "./_ProposalSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProposalsOutput shape
 */
export interface ListProposalsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The summary of each proposal made on the network.</p>
   */
  Proposals?: Array<_UnmarshalledProposalSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
