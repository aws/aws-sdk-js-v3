import { _UnmarshalledCodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server for the request to update user attributes.</p>
 */
export interface UpdateUserAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The code delivery details list from the server for the request to update user attributes.</p>
   */
  CodeDeliveryDetailsList?: Array<_UnmarshalledCodeDeliveryDetailsType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
