import { _EngineModeList } from "./_EngineModeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Parameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    ParameterValue: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    ApplyType: {
      shape: {
        type: "string"
      }
    },
    DataType: {
      shape: {
        type: "string"
      }
    },
    AllowedValues: {
      shape: {
        type: "string"
      }
    },
    IsModifiable: {
      shape: {
        type: "boolean"
      }
    },
    MinimumEngineVersion: {
      shape: {
        type: "string"
      }
    },
    ApplyMethod: {
      shape: {
        type: "string"
      }
    },
    SupportedEngineModes: {
      shape: _EngineModeList
    }
  }
};
