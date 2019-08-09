import { _LabelCountersForWorkteam } from "./_LabelCountersForWorkteam";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobForWorkteamSummary: _Structure_ = {
  type: "structure",
  required: ["JobReferenceCode", "WorkRequesterAccountId", "CreationTime"],
  members: {
    LabelingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobReferenceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkRequesterAccountId: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LabelCounters: {
      shape: _LabelCountersForWorkteam
    },
    NumberOfHumanWorkersPerDataObject: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
