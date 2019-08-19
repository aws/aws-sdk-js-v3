import { _ProcessingTargetNameList } from "./_ProcessingTargetNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobProcessDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    processingTargets: {
      shape: _ProcessingTargetNameList
    },
    numberOfCanceledThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfSucceededThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfFailedThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfRejectedThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfQueuedThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfInProgressThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfRemovedThings: {
      shape: {
        type: "integer"
      }
    },
    numberOfTimedOutThings: {
      shape: {
        type: "integer"
      }
    }
  }
};
