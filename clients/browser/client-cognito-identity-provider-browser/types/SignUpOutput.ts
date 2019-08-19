import { _UnmarshalledCodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the server for a registration request.</p>
 */
export interface SignUpOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A response from the server indicating that a user registration has been confirmed.</p>
   */
  UserConfirmed: boolean;

  /**
   * <p>The code delivery details returned by the server response to the user registration request.</p>
   */
  CodeDeliveryDetails?: _UnmarshalledCodeDeliveryDetailsType;

  /**
   * <p>The UUID of the authenticated user. This is not the same as <code>username</code>.</p>
   */
  UserSub: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
