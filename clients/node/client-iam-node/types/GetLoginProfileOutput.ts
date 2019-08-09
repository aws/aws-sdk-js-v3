import { _UnmarshalledLoginProfile } from "./_LoginProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetLoginProfile</a> request. </p>
 */
export interface GetLoginProfileOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing the user name and password create date for the user.</p>
   */
  LoginProfile: _UnmarshalledLoginProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
