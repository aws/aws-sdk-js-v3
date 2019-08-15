import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLaunchTemplateDataInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
