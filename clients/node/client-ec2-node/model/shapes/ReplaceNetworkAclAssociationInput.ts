import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceNetworkAclAssociationInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId", "NetworkAclId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NetworkAclId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclId"
    }
  }
};
