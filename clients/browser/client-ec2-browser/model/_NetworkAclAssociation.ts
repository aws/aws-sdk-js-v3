import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkAclAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkAclAssociationId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclAssociationId"
    },
    NetworkAclId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclId"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};
