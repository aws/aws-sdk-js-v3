import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobExecutionInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "thingName", "status"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "jobId"
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusDetails: {
      shape: _DetailsMap
    },
    stepTimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    },
    expectedVersion: {
      shape: {
        type: "integer"
      }
    },
    includeJobExecutionState: {
      shape: {
        type: "boolean"
      }
    },
    includeJobDocument: {
      shape: {
        type: "boolean"
      }
    },
    executionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
