import { _UnmarshalledDomainSummary } from "./_DomainSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDomainsOutput shape
 */
export interface ListDomainsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the domains.</p>
   */
  Domains?: Array<_UnmarshalledDomainSummary>;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
