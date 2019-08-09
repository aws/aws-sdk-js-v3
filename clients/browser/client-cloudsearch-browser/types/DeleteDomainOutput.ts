import { _UnmarshalledDomainStatus } from "./_DomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>
 */
export interface DeleteDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: _UnmarshalledDomainStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
