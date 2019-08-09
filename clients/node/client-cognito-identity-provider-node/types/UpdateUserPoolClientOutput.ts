import { _UnmarshalledUserPoolClientType } from "./_UserPoolClientType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to the request to update the user pool client.</p>
 */
export interface UpdateUserPoolClientOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user pool client value from the response from the server when an update user pool client request is made.</p>
   */
  UserPoolClient?: _UnmarshalledUserPoolClientType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
