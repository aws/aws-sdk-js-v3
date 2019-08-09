import { _UnmarshalledUserPoolType } from "./_UserPoolType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server for the request to create a user pool.</p>
 */
export interface CreateUserPoolOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A container for the user pool details.</p>
   */
  UserPool?: _UnmarshalledUserPoolType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
