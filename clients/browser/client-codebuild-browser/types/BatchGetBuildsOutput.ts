import { _UnmarshalledBuild } from "./_Build";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetBuildsOutput shape
 */
export interface BatchGetBuildsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the requested builds.</p>
   */
  builds?: Array<_UnmarshalledBuild>;

  /**
   * <p>The IDs of builds for which information could not be found.</p>
   */
  buildsNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
