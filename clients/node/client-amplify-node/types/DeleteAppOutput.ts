import { _UnmarshalledApp } from "./_App";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for an Amplify App delete request. </p>
 */
export interface DeleteAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Amplify App represents different branches of a repository for building, deploying, and hosting. </p>
   */
  app: _UnmarshalledApp;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
