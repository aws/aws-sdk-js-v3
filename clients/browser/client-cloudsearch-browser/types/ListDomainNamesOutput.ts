import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>
 */
export interface ListDomainNamesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the search domains owned by an account.</p>
   */
  DomainNames?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
