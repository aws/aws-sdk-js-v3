import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowStepFunctionsParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Input: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
