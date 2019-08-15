import { _ValidUpgradeTargetList } from "./_ValidUpgradeTargetList";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBEngineVersion: _Structure_ = {
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
    DBParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    DBEngineDescription: {
      shape: {
        type: "string"
      }
    },
    DBEngineVersionDescription: {
      shape: {
        type: "string"
      }
    },
    ValidUpgradeTarget: {
      shape: _ValidUpgradeTargetList
    },
    ExportableLogTypes: {
      shape: _LogTypeList
    },
    SupportsLogExportsToCloudwatchLogs: {
      shape: {
        type: "boolean"
      }
    }
  }
};
