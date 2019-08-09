/**
 * <p>Information required to publish the MQTT message via the AWS IoT message broker.</p>
 */
export interface _IotTopicPublishAction {
  /**
   * <p>The MQTT topic of the message.</p>
   */
  mqttTopic: string;
}

export type _UnmarshalledIotTopicPublishAction = _IotTopicPublishAction;
