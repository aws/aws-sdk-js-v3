import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkAclInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
