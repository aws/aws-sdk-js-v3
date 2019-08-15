import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelJobExecutionInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "thingName"],
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
    force: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "force"
    },
    expectedVersion: {
      shape: {
        type: "integer"
      }
    },
    statusDetails: {
      shape: _DetailsMap
    }
  }
};
