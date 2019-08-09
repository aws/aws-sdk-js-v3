import { _JobTargets } from "./_JobTargets";
import { _PresignedUrlConfig } from "./_PresignedUrlConfig";
import { _JobExecutionsRolloutConfig } from "./_JobExecutionsRolloutConfig";
import { _AbortConfig } from "./_AbortConfig";
import { _JobProcessDetails } from "./_JobProcessDetails";
import { _TimeoutConfig } from "./_TimeoutConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobArn: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    targetSelection: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    forceCanceled: {
      shape: {
        type: "boolean"
      }
    },
    reasonCode: {
      shape: {
        type: "string"
      }
    },
    comment: {
      shape: {
        type: "string"
      }
    },
    targets: {
      shape: _JobTargets
    },
    description: {
      shape: {
        type: "string"
      }
    },
    presignedUrlConfig: {
      shape: _PresignedUrlConfig
    },
    jobExecutionsRolloutConfig: {
      shape: _JobExecutionsRolloutConfig
    },
    abortConfig: {
      shape: _AbortConfig
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    completedAt: {
      shape: {
        type: "timestamp"
      }
    },
    jobProcessDetails: {
      shape: _JobProcessDetails
    },
    timeoutConfig: {
      shape: _TimeoutConfig
    }
  }
};
