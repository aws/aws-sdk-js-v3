import { _UnmarshalledSmsMfaConfigType } from "./_SmsMfaConfigType";
import { _UnmarshalledSoftwareTokenMfaConfigType } from "./_SoftwareTokenMfaConfigType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUserPoolMfaConfigOutput shape
 */
export interface GetUserPoolMfaConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SMS text message multi-factor (MFA) configuration.</p>
   */
  SmsMfaConfiguration?: _UnmarshalledSmsMfaConfigType;

  /**
   * <p>The software token multi-factor (MFA) configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: _UnmarshalledSoftwareTokenMfaConfigType;

  /**
   * <p>The multi-factor (MFA) configuration.</p>
   */
  MfaConfiguration?: "OFF" | "ON" | "OPTIONAL" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
