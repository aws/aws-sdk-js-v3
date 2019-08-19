/**
 * <p>The SMS configuration type.</p>
 */
export interface _SmsConfigurationType {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) caller.</p>
   */
  SnsCallerArn: string;

  /**
   * <p>The external ID.</p>
   */
  ExternalId?: string;
}

export type _UnmarshalledSmsConfigurationType = _SmsConfigurationType;
