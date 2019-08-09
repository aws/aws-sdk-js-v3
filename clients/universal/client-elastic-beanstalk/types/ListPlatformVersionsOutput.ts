import { _UnmarshalledPlatformSummary } from "./_PlatformSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPlatformVersionsOutput shape
 */
export interface ListPlatformVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the platforms.</p>
   */
  PlatformSummaryList?: Array<_UnmarshalledPlatformSummary>;

  /**
   * <p>The starting index into the remaining list of platforms. if this value is not <code>null</code>, you can use it in a subsequent <code>ListPlatformVersion</code> call. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
