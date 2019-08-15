import { _PhaseContexts } from "./_PhaseContexts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BuildPhase: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    phaseType: {
      shape: {
        type: "string"
      }
    },
    phaseStatus: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    durationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    contexts: {
      shape: _PhaseContexts
    }
  }
};
