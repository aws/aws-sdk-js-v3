/**
 * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
 */
export interface _IotEventsDestinationConfiguration {
  /**
   * <p>The name of the AWS IoT Events input to which data set contents are delivered.</p>
   */
  inputName: string;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to deliver data set contents to an AWS IoT Events input.</p>
   */
  roleArn: string;
}

export type _UnmarshalledIotEventsDestinationConfiguration = _IotEventsDestinationConfiguration;
