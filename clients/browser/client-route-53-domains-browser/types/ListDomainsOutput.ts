import { _UnmarshalledDomainSummary } from "./_DomainSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The ListDomains response includes the following elements.</p>
 */
export interface ListDomainsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A summary of domains.</p>
   */
  Domains: Array<_UnmarshalledDomainSummary>;

  /**
   * <p>If there are more domains than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
