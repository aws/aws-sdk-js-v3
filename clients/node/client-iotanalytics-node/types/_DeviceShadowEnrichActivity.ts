/**
 * <p>An activity that adds information from the AWS IoT Device Shadows service to a message.</p>
 */
export interface _DeviceShadowEnrichActivity {
  /**
   * <p>The name of the 'deviceShadowEnrich' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string;

  /**
   * <p>The name of the IoT device whose shadow information is added to the message.</p>
   */
  thingName: string;

  /**
   * <p>The ARN of the role that allows access to the device's shadow.</p>
   */
  roleArn: string;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledDeviceShadowEnrichActivity = _DeviceShadowEnrichActivity;
