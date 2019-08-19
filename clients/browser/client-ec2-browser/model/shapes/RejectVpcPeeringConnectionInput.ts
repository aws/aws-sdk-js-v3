import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectVpcPeeringConnectionInput: _Structure_ = {
  type: "structure",
  required: ["VpcPeeringConnectionId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
