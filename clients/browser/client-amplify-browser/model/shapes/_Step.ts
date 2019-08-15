import { _Screenshots } from "./_Screenshots";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Step: _Structure_ = {
  type: "structure",
  required: ["stepName", "startTime", "status", "endTime"],
  members: {
    stepName: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    logUrl: {
      shape: {
        type: "string"
      }
    },
    artifactsUrl: {
      shape: {
        type: "string"
      }
    },
    screenshots: {
      shape: _Screenshots
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    context: {
      shape: {
        type: "string"
      }
    }
  }
};
