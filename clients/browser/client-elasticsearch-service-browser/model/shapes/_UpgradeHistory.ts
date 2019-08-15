import { _UpgradeStepsList } from "./_UpgradeStepsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpgradeHistory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpgradeName: {
      shape: {
        type: "string"
      }
    },
    StartTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    UpgradeStatus: {
      shape: {
        type: "string"
      }
    },
    StepsList: {
      shape: _UpgradeStepsList
    }
  }
};
