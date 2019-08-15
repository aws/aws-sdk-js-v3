import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowLambdaParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientContext: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Qualifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Payload: {
      shape: {
        type: "blob",
        sensitive: true
      }
    }
  }
};
