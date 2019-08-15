import { _ConfigTypeData } from "./_ConfigTypeData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigInput: _Structure_ = {
  type: "structure",
  required: ["configData", "configId", "configType", "name"],
  members: {
    configData: {
      shape: _ConfigTypeData
    },
    configId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configId"
    },
    configType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configType"
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
