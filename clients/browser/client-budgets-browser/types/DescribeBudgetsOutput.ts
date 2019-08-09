import { _UnmarshalledBudget } from "./_Budget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Response of DescribeBudgets </p>
 */
export interface DescribeBudgetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of budgets.</p>
   */
  Budgets?: Array<_UnmarshalledBudget>;

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
