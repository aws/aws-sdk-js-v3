import { _UnmarshalledSigningPlatform } from "./_SigningPlatform";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSigningPlatformsOutput shape
 */
export interface ListSigningPlatformsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all platforms that match the request parameters.</p>
   */
  platforms?: Array<_UnmarshalledSigningPlatform>;

  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
