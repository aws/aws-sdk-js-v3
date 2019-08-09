import { _UnmarshalledEnvironmentPlatform } from "./_EnvironmentPlatform";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCuratedEnvironmentImagesOutput shape
 */
export interface ListCuratedEnvironmentImagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about supported platforms for Docker images that are managed by AWS CodeBuild.</p>
   */
  platforms?: Array<_UnmarshalledEnvironmentPlatform>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
