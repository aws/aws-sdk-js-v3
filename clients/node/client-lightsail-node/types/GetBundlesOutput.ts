import { _UnmarshalledBundle } from "./_Bundle";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBundlesOutput shape
 */
export interface GetBundlesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs that contains information about the available bundles.</p>
   */
  bundles?: Array<_UnmarshalledBundle>;

  /**
   * <p>A token used for advancing to the next page of results from your get active names request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
