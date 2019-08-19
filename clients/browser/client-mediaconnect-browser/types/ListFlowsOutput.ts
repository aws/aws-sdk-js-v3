import { _UnmarshalledListedFlow } from "./_ListedFlow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFlowsOutput shape
 */
export interface ListFlowsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of flow summaries.
   */
  Flows?: Array<_UnmarshalledListedFlow>;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
