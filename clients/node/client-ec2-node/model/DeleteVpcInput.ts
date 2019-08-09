import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    VpcId: {
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
