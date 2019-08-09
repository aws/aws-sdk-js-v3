import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcTenancyInput: _Structure_ = {
  type: "structure",
  required: ["VpcId", "InstanceTenancy"],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    InstanceTenancy: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
