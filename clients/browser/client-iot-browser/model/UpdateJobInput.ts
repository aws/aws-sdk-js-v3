import { _PresignedUrlConfig } from "./_PresignedUrlConfig";
import { _JobExecutionsRolloutConfig } from "./_JobExecutionsRolloutConfig";
import { _AbortConfig } from "./_AbortConfig";
import { _TimeoutConfig } from "./_TimeoutConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "jobId"
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
    timeoutConfig: {
      shape: _TimeoutConfig
    }
  }
};
