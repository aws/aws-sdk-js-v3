import { _UnmarshalledCodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Respresents the response from the server regarding the request to reset a password.</p>
 */
export interface ForgotPasswordOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The code delivery details returned by the server in response to the request to reset a password.</p>
   */
  CodeDeliveryDetails?: _UnmarshalledCodeDeliveryDetailsType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
