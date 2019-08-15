import { _GroupIdStringList } from "./_GroupIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachClassicLinkVpcInput: _Structure_ = {
  type: "structure",
  required: ["Groups", "InstanceId", "VpcId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Groups: {
      shape: _GroupIdStringList,
      locationName: "SecurityGroupId"
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
