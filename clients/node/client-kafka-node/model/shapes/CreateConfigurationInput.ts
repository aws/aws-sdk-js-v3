import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ServerProperties", "KafkaVersions", "Name"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    KafkaVersions: {
      shape: ___listOf__string,
      locationName: "kafkaVersions"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    ServerProperties: {
      shape: {
        type: "blob"
      },
      locationName: "serverProperties"
    }
  }
};
