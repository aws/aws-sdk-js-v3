/**
 * <p>Sends an input to an AWS IoT Events detector.</p>
 */
export interface _IotEventsAction {
  /**
   * <p>The name of the AWS IoT Events input.</p>
   */
  inputName: string;

  /**
   * <p>[Optional] Use this to ensure that only one input (message) with a given messageId will be processed by an AWS IoT Events detector.</p>
   */
  messageId?: string;

  /**
   * <p>The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT Events detector. ("Action":"iotevents:BatchPutMessage").</p>
   */
  roleArn: string;
}

export type _UnmarshalledIotEventsAction = _IotEventsAction;
