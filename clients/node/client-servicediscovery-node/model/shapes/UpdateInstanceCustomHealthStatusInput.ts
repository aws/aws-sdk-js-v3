import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInstanceCustomHealthStatusInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId", "InstanceId", "Status"],
  members: {
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
