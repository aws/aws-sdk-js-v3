import { _UnmarshalledUserPoolClientType } from "./_UserPoolClientType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to create a user pool client.</p>
 */
export interface CreateUserPoolClientOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user pool client that was just created.</p>
   */
  UserPoolClient?: _UnmarshalledUserPoolClientType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
