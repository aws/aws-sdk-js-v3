import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeletePortfolioShareOutput shape
 */
export interface DeletePortfolioShareOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
   */
  PortfolioShareToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
