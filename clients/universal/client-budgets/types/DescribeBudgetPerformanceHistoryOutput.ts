import { _UnmarshalledBudgetPerformanceHistory } from "./_BudgetPerformanceHistory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBudgetPerformanceHistoryOutput shape
 */
export interface DescribeBudgetPerformanceHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The history of how often the budget has gone into an <code>ALARM</code> state.</p> <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>
   */
  BudgetPerformanceHistory?: _UnmarshalledBudgetPerformanceHistory;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
