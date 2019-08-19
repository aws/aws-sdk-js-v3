import { _UnmarshalledProposal } from "./_Proposal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProposalOutput shape
 */
export interface GetProposalOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a proposal.</p>
   */
  Proposal?: _UnmarshalledProposal;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
