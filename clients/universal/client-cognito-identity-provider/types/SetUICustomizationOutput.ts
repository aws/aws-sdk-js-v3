import { _UnmarshalledUICustomizationType } from "./_UICustomizationType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetUICustomizationOutput shape
 */
export interface SetUICustomizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The UI customization information.</p>
   */
  UICustomization: _UnmarshalledUICustomizationType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
