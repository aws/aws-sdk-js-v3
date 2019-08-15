import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPasswordDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    PasswordData: {
      shape: {
        type: "string"
      },
      locationName: "passwordData"
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "timestamp"
    }
  }
};
