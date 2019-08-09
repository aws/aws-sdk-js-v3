import { _UnmarshalledDomainInfo } from "./_DomainInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.</p>
 */
export interface ListDomainNamesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of Elasticsearch domain names.</p>
   */
  DomainNames?: Array<_UnmarshalledDomainInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
