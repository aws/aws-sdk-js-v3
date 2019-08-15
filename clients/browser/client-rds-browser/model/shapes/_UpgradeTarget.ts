import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpgradeTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    AutoUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    IsMajorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    }
  }
};
