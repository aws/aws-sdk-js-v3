import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Command: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommandId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    AcknowledgedAt: {
      shape: {
        type: "string"
      }
    },
    CompletedAt: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ExitCode: {
      shape: {
        type: "integer"
      }
    },
    LogUrl: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
