/**
 * <p>An activity that adds data from the AWS IoT device registry to your message.</p>
 */
export interface _DeviceRegistryEnrichActivity {
  /**
   * <p>The name of the 'deviceRegistryEnrich' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string;

  /**
   * <p>The name of the IoT device whose registry information is added to the message.</p>
   */
  thingName: string;

  /**
   * <p>The ARN of the role that allows access to the device's registry information.</p>
   */
  roleArn: string;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledDeviceRegistryEnrichActivity = _DeviceRegistryEnrichActivity;
