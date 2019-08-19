import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConsoleOutputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Output: {
      shape: {
        type: "string"
      },
      locationName: "output"
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "timestamp"
    }
  }
};
