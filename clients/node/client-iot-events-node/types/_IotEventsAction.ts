/**
 * <p>Sends an IoT Events input, passing in information about the detector model instance and the event which triggered the action.</p>
 */
export interface _IotEventsAction {
  /**
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   */
  inputName: string;
}

export type _UnmarshalledIotEventsAction = _IotEventsAction;
