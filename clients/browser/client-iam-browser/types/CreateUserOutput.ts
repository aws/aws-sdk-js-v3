import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateUser</a> request. </p>
 */
export interface CreateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure with details about the new IAM user.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
