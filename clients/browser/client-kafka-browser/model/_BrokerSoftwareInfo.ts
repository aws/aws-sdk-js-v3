import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerSoftwareInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationArn: {
      shape: {
        type: "string"
      },
      locationName: "configurationArn"
    },
    ConfigurationRevision: {
      shape: {
        type: "integer"
      },
      locationName: "configurationRevision"
    },
    KafkaVersion: {
      shape: {
        type: "string"
      },
      locationName: "kafkaVersion"
    }
  }
};
