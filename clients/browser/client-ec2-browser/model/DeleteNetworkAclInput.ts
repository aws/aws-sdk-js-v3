import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNetworkAclInput: _Structure_ = {
  type: "structure",
  required: ["NetworkAclId"],
  members: {
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
