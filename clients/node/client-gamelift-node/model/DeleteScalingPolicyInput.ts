import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: ["Name", "FleetId"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetId: {
      shape: {
        type: "string"
      }
    }
  }
};
