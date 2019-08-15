import { _CharacterSet } from "./_CharacterSet";
import { _SupportedCharacterSetsList } from "./_SupportedCharacterSetsList";
import { _ValidUpgradeTargetList } from "./_ValidUpgradeTargetList";
import { _SupportedTimezonesList } from "./_SupportedTimezonesList";
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
    DefaultCharacterSet: {
      shape: _CharacterSet
    },
    SupportedCharacterSets: {
      shape: _SupportedCharacterSetsList
    },
    ValidUpgradeTarget: {
      shape: _ValidUpgradeTargetList
    },
    SupportedTimezones: {
      shape: _SupportedTimezonesList
    },
    ExportableLogTypes: {
      shape: _LogTypeList
    },
    SupportsLogExportsToCloudwatchLogs: {
      shape: {
        type: "boolean"
      }
    },
    SupportsReadReplica: {
      shape: {
        type: "boolean"
      }
    }
  }
};
