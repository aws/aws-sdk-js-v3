import { _NormalStringMap } from "./_NormalStringMap";
import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { _FailureDetails } from "./_FailureDetails";
import { _ValidNextStepList } from "./_ValidNextStepList";
import { _Targets } from "./_Targets";
import { _TargetLocation } from "./_TargetLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StepName: {
      shape: {
        type: "string"
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    TimeoutSeconds: {
      shape: {
        type: "integer"
      }
    },
    OnFailure: {
      shape: {
        type: "string"
      }
    },
    MaxAttempts: {
      shape: {
        type: "integer"
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
    StepStatus: {
      shape: {
        type: "string"
      }
    },
    ResponseCode: {
      shape: {
        type: "string"
      }
    },
    Inputs: {
      shape: _NormalStringMap
    },
    Outputs: {
      shape: _AutomationParameterMap
    },
    Response: {
      shape: {
        type: "string"
      }
    },
    FailureMessage: {
      shape: {
        type: "string"
      }
    },
    FailureDetails: {
      shape: _FailureDetails
    },
    StepExecutionId: {
      shape: {
        type: "string"
      }
    },
    OverriddenParameters: {
      shape: _AutomationParameterMap
    },
    IsEnd: {
      shape: {
        type: "boolean"
      }
    },
    NextStep: {
      shape: {
        type: "string"
      }
    },
    IsCritical: {
      shape: {
        type: "boolean"
      }
    },
    ValidNextSteps: {
      shape: _ValidNextStepList
    },
    Targets: {
      shape: _Targets
    },
    TargetLocation: {
      shape: _TargetLocation
    }
  }
};
