import { _UnmarshalledApp } from "./_App";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for an Amplify App list request. </p>
 */
export interface ListAppsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> List of Amplify Apps. </p>
   */
  apps: Array<_UnmarshalledApp>;

  /**
   * <p> Pagination token. Set to null to start listing Apps from start. If non-null pagination token is returned in a result, then pass its value in here to list more projects. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
