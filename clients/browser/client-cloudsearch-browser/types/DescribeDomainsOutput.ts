import { _UnmarshalledDomainStatus } from "./_DomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>
 */
export interface DescribeDomainsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the status of each requested domain.</p>
   */
  DomainStatusList: Array<_UnmarshalledDomainStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
