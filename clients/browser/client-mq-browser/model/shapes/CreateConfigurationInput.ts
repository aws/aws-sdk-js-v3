import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineType: {
      shape: {
        type: "string"
      },
      locationName: "engineType"
    },
    EngineVersion: {
      shape: {
        type: "string"
      },
      locationName: "engineVersion"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
