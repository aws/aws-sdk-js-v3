import { _UnmarshalledDomain } from "./_Domain";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDomainsOutput shape
 */
export interface GetDomainsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about each of the domain entries in the user's account.</p>
   */
  domains?: Array<_UnmarshalledDomain>;

  /**
   * <p>A token used for advancing to the next page of results from your get active names request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
