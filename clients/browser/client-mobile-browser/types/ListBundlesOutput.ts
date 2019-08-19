import { _UnmarshalledBundleDetails } from "./_BundleDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure contains a list of all available bundles with details. </p>
 */
export interface ListBundlesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of bundles. </p>
   */
  bundleList?: Array<_UnmarshalledBundleDetails>;

  /**
   * <p> Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
