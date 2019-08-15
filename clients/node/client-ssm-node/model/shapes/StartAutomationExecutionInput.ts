import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { _Targets } from "./_Targets";
import { _TargetMaps } from "./_TargetMaps";
import { _TargetLocations } from "./_TargetLocations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartAutomationExecutionInput: _Structure_ = {
  type: "structure",
  required: ["DocumentName"],
  members: {
    DocumentName: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _AutomationParameterMap
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 36
      }
    },
    Mode: {
      shape: {
        type: "string"
      }
    },
    TargetParameterName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Targets: {
      shape: _Targets
    },
    TargetMaps: {
      shape: _TargetMaps
    },
    MaxConcurrency: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxErrors: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetLocations: {
      shape: _TargetLocations
    }
  }
};
