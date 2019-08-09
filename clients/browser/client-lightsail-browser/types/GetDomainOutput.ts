import { _UnmarshalledDomain } from "./_Domain";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDomainOutput shape
 */
export interface GetDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about your get domain request.</p>
   */
  domain?: _UnmarshalledDomain;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
