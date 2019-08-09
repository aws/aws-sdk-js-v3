import { _UnmarshalledBlueprint } from "./_Blueprint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBlueprintsOutput shape
 */
export interface GetBlueprintsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs that contains information about the available blueprints.</p>
   */
  blueprints?: Array<_UnmarshalledBlueprint>;

  /**
   * <p>A token used for advancing to the next page of results from your get blueprints request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
