import { _UnmarshalledOpsItemSummary } from "./_OpsItemSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOpsItemsOutput shape
 */
export interface DescribeOpsItemsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of OpsItems.</p>
   */
  OpsItemSummaries?: Array<_UnmarshalledOpsItemSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
