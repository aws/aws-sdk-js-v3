import { _Issues } from "./_Issues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpgradeStepItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpgradeStep: {
      shape: {
        type: "string"
      }
    },
    UpgradeStepStatus: {
      shape: {
        type: "string"
      }
    },
    Issues: {
      shape: _Issues
    },
    ProgressPercent: {
      shape: {
        type: "float"
      }
    }
  }
};
