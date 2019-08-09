import { _ContainerStateChanges } from "./_ContainerStateChanges";
import { _AttachmentStateChanges } from "./_AttachmentStateChanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubmitTaskStateChangeInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    task: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    },
    containers: {
      shape: _ContainerStateChanges
    },
    attachments: {
      shape: _AttachmentStateChanges
    },
    pullStartedAt: {
      shape: {
        type: "timestamp"
      }
    },
    pullStoppedAt: {
      shape: {
        type: "timestamp"
      }
    },
    executionStoppedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
