import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigInput: _Structure_ = {
  type: "structure",
  required: ["configId", "configType"],
  members: {
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
    }
  }
};
