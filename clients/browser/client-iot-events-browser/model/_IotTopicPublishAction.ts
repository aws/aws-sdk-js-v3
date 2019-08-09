import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IotTopicPublishAction: _Structure_ = {
  type: "structure",
  required: ["mqttTopic"],
  members: {
    mqttTopic: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
