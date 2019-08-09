import { _UnmarshalledVoteSummary } from "./_VoteSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProposalVotesOutput shape
 */
export interface ListProposalVotesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The listing of votes. </p>
   */
  ProposalVotes?: Array<_UnmarshalledVoteSummary>;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
