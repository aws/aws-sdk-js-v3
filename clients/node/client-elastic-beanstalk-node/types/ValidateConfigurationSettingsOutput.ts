import { _UnmarshalledValidationMessage } from "./_ValidationMessage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Provides a list of validation messages.</p>
 */
export interface ValidateConfigurationSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <a>ValidationMessage</a>. </p>
   */
  Messages?: Array<_UnmarshalledValidationMessage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
