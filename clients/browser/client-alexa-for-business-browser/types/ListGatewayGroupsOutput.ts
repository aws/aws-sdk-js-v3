import { _UnmarshalledGatewayGroupSummary } from "./_GatewayGroupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGatewayGroupsOutput shape
 */
export interface ListGatewayGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The gateway groups in the list.</p>
   */
  GatewayGroups?: Array<_UnmarshalledGatewayGroupSummary>;

  /**
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
