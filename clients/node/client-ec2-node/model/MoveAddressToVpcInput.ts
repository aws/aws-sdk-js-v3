import { Structure as _Structure_ } from "@aws-sdk/types";

export const MoveAddressToVpcInput: _Structure_ = {
  type: "structure",
  required: ["PublicIp"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    }
  }
};
