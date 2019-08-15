import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSubnetInput: _Structure_ = {
  type: "structure",
  required: ["SubnetId"],
  members: {
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
