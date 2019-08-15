import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConsoleOutputInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Latest: {
      shape: {
        type: "boolean"
      }
    }
  }
};
