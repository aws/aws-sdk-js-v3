import { _UnmarshalledGroupDefinition } from "./_GroupDefinition";
import { _UnmarshalledResultByTime } from "./_ResultByTime";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCostAndUsageOutput shape
 */
export interface GetCostAndUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.</p>
   */
  GroupDefinitions?: Array<_UnmarshalledGroupDefinition>;

  /**
   * <p>The time period that is covered by the results in the response.</p>
   */
  ResultsByTime?: Array<_UnmarshalledResultByTime>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
