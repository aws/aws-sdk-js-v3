import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEnvironmentConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "EnvironmentName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
