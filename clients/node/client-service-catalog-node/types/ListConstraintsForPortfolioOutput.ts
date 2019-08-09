import { _UnmarshalledConstraintDetail } from "./_ConstraintDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConstraintsForPortfolioOutput shape
 */
export interface ListConstraintsForPortfolioOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the constraints.</p>
   */
  ConstraintDetails?: Array<_UnmarshalledConstraintDetail>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
