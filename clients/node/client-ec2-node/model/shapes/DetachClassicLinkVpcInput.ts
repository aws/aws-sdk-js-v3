import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachClassicLinkVpcInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "VpcId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
