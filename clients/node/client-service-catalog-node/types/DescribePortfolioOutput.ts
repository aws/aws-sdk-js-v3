import { _UnmarshalledPortfolioDetail } from "./_PortfolioDetail";
import { _UnmarshalledTag } from "./_Tag";
import { _UnmarshalledTagOptionDetail } from "./_TagOptionDetail";
import { _UnmarshalledBudgetDetail } from "./_BudgetDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePortfolioOutput shape
 */
export interface DescribePortfolioOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: _UnmarshalledPortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Information about the TagOptions associated with the portfolio.</p>
   */
  TagOptions?: Array<_UnmarshalledTagOptionDetail>;

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<_UnmarshalledBudgetDetail>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
