import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConsoleScreenshotInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    WakeUp: {
      shape: {
        type: "boolean"
      }
    }
  }
};
