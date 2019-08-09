import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The GetEntitlementsRequest contains parameters for the GetEntitlements operation.</p>
 */
export interface GetEntitlementsInput {
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product code will be provided by AWS Marketplace when the product listing is created.</p>
   */
  ProductCode: string;

  /**
   * <p>Filter is used to return entitlements for a specific customer or for a specific dimension. Filters are described as keys mapped to a lists of values. Filtered requests are <i>unioned</i> for each value in the value list, and then <i>intersected</i> for each filter key.</p>
   */
  Filter?:
    | {
        [key in "CUSTOMER_IDENTIFIER" | "DIMENSION" | string]:
          | Array<string>
          | Iterable<string>
      }
    | Iterable<
        [
          "CUSTOMER_IDENTIFIER" | "DIMENSION" | string,
          Array<string> | Iterable<string>
        ]
      >;

  /**
   * <p>For paginated calls to GetEntitlements, pass the NextToken from the previous GetEntitlementsResult.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to retrieve from the GetEntitlements operation. For pagination, use the NextToken field in subsequent calls to GetEntitlements.</p>
   */
  MaxResults?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
