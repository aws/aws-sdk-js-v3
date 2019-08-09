import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSMBSettingsOutput shape
 */
export interface DescribeSMBSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The name of the domain that the gateway is joined to.</p>
   */
  DomainName?: string;

  /**
   * <p>This value is true if a password for the guest user “smbguest” is set, and otherwise false.</p>
   */
  SMBGuestPasswordSet?: boolean;

  /**
   * <p>The type of security strategy that was specified for file gateway.</p> <p>ClientSpecified: SMBv1 is enabled, SMB signing is offered but not required, SMB encryption is offered but not required.</p> <p>MandatorySigning: SMBv1 is disabled, SMB signing is required, SMB encryption is offered but not required.</p> <p>MandatoryEncryption: SMBv1 is disabled, SMB signing is offered but not required, SMB encryption is required.</p>
   */
  SMBSecurityStrategy?:
    | "ClientSpecified"
    | "MandatorySigning"
    | "MandatoryEncryption"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
