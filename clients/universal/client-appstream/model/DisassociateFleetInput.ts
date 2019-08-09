import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateFleetInput: _Structure_ = {
  type: "structure",
  required: ["FleetName", "StackName"],
  members: {
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
