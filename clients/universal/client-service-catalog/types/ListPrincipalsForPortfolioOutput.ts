import { _UnmarshalledPrincipal } from "./_Principal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPrincipalsForPortfolioOutput shape
 */
export interface ListPrincipalsForPortfolioOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IAM principals (users or roles) associated with the portfolio.</p>
   */
  Principals?: Array<_UnmarshalledPrincipal>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
