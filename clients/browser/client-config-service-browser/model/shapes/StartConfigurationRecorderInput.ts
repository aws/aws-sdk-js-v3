import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartConfigurationRecorderInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationRecorderName"],
  members: {
    ConfigurationRecorderName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
