/**
 * <p>Describes an action to republish to another topic.</p>
 */
export interface _RepublishAction {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string;

  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string;
}

export type _UnmarshalledRepublishAction = _RepublishAction;
