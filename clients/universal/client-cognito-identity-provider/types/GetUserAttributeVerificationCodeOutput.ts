import { _UnmarshalledCodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The verification code response returned by the server response to get the user attribute verification code.</p>
 */
export interface GetUserAttributeVerificationCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The code delivery details returned by the server in response to the request to get the user attribute verification code.</p>
   */
  CodeDeliveryDetails?: _UnmarshalledCodeDeliveryDetailsType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
