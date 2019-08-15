import { _JobTargets } from "./_JobTargets";
import { _PresignedUrlConfig } from "./_PresignedUrlConfig";
import { _JobExecutionsRolloutConfig } from "./_JobExecutionsRolloutConfig";
import { _AbortConfig } from "./_AbortConfig";
import { _TimeoutConfig } from "./_TimeoutConfig";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "targets"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "jobId"
    },
    targets: {
      shape: _JobTargets
    },
    documentSource: {
      shape: {
        type: "string",
        min: 1
      }
    },
    document: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    presignedUrlConfig: {
      shape: _PresignedUrlConfig
    },
    targetSelection: {
      shape: {
        type: "string"
      }
    },
    jobExecutionsRolloutConfig: {
      shape: _JobExecutionsRolloutConfig
    },
    abortConfig: {
      shape: _AbortConfig
    },
    timeoutConfig: {
      shape: _TimeoutConfig
    },
    tags: {
      shape: _TagList
    }
  }
};
