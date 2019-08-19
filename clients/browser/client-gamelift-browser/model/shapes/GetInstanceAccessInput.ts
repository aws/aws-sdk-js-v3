import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceAccessInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "InstanceId"],
  members: {
    FleetId: {
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
