import { _UnmarshalledBundleDetails } from "./_BundleDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure contains the details of the bundle. </p>
 */
export interface DescribeBundleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The details of the bundle. </p>
   */
  details?: _UnmarshalledBundleDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
