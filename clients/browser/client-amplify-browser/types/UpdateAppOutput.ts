import { _UnmarshalledApp } from "./_App";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for an Amplify App update request. </p>
 */
export interface UpdateAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> App structure for the updated App. </p>
   */
  app: _UnmarshalledApp;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
