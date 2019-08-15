import { _StepExecutionList } from "./_StepExecutionList";
import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { _Targets } from "./_Targets";
import { _TargetMaps } from "./_TargetMaps";
import { _ResolvedTargets } from "./_ResolvedTargets";
import { _TargetLocations } from "./_TargetLocations";
import { _ProgressCounters } from "./_ProgressCounters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutomationExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
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
    ExecutionStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    ExecutionEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    AutomationExecutionStatus: {
      shape: {
        type: "string"
      }
    },
    StepExecutions: {
      shape: _StepExecutionList
    },
    StepExecutionsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Parameters: {
      shape: _AutomationParameterMap
    },
    Outputs: {
      shape: _AutomationParameterMap
    },
    FailureMessage: {
      shape: {
        type: "string"
      }
    },
    Mode: {
      shape: {
        type: "string"
      }
    },
    ParentAutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    ExecutedBy: {
      shape: {
        type: "string"
      }
    },
    CurrentStepName: {
      shape: {
        type: "string"
      }
    },
    CurrentAction: {
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
    ResolvedTargets: {
      shape: _ResolvedTargets
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
    Target: {
      shape: {
        type: "string"
      }
    },
    TargetLocations: {
      shape: _TargetLocations
    },
    ProgressCounters: {
      shape: _ProgressCounters
    }
  }
};
