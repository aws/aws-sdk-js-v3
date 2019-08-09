import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterInstanceInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId", "InstanceId"],
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
    }
  }
};
