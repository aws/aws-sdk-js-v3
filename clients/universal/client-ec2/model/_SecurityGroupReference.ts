import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityGroupReference: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    ReferencingVpcId: {
      shape: {
        type: "string"
      },
      locationName: "referencingVpcId"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
