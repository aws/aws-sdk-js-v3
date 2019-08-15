import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserIdGroupPair: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    PeeringStatus: {
      shape: {
        type: "string"
      },
      locationName: "peeringStatus"
    },
    UserId: {
      shape: {
        type: "string"
      },
      locationName: "userId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
