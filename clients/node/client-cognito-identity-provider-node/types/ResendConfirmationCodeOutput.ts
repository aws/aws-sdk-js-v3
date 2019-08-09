import { _UnmarshalledCodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.</p>
 */
export interface ResendConfirmationCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The code delivery details returned by the server in response to the request to resend the confirmation code.</p>
   */
  CodeDeliveryDetails?: _UnmarshalledCodeDeliveryDetailsType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
