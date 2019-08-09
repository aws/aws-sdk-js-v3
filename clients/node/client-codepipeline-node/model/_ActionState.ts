import { _ActionRevision } from "./_ActionRevision";
import { _ActionExecution } from "./_ActionExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    currentRevision: {
      shape: _ActionRevision
    },
    latestExecution: {
      shape: _ActionExecution
    },
    entityUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
