import { _UnmarshalledBuildNotDeleted } from "./_BuildNotDeleted";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteBuildsOutput shape
 */
export interface BatchDeleteBuildsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the builds that were successfully deleted.</p>
   */
  buildsDeleted?: Array<string>;

  /**
   * <p>Information about any builds that could not be successfully deleted.</p>
   */
  buildsNotDeleted?: Array<_UnmarshalledBuildNotDeleted>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
