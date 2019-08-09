import { _UnmarshalledBudgetDetail } from "./_BudgetDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBudgetsForResourceOutput shape
 */
export interface ListBudgetsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<_UnmarshalledBudgetDetail>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
