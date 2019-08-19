import { _UnmarshalledShareDetails } from "./_ShareDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePortfolioShareStatusOutput shape
 */
export interface DescribePortfolioShareStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token for the portfolio share operation. For example, <code>share-6v24abcdefghi</code>.</p>
   */
  PortfolioShareToken?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>Organization node identifier. It can be either account id, organizational unit id or organization id.</p>
   */
  OrganizationNodeValue?: string;

  /**
   * <p>Status of the portfolio share operation.</p>
   */
  Status?:
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "COMPLETED_WITH_ERRORS"
    | "ERROR"
    | string;

  /**
   * <p>Information about the portfolio share operation.</p>
   */
  ShareDetails?: _UnmarshalledShareDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
