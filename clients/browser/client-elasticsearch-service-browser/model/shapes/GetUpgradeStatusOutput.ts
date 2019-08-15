import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUpgradeStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpgradeStep: {
      shape: {
        type: "string"
      }
    },
    StepStatus: {
      shape: {
        type: "string"
      }
    },
    UpgradeName: {
      shape: {
        type: "string"
      }
    }
  }
};
