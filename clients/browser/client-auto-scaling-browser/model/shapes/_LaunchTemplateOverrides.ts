import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
