import { _UnmarshalledWebsiteAuthorizationProviderSummary } from "./_WebsiteAuthorizationProviderSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWebsiteAuthorizationProvidersOutput shape
 */
export interface ListWebsiteAuthorizationProvidersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The website authorization providers.</p>
   */
  WebsiteAuthorizationProviders?: Array<
    _UnmarshalledWebsiteAuthorizationProviderSummary
  >;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
