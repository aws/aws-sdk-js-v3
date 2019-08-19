import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcPeeringConnectionInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "VpcPeeringConnectionId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
