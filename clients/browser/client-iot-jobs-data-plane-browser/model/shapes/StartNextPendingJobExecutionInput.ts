import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartNextPendingJobExecutionInput: _Structure_ = {
  type: "structure",
  required: ["thingName"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    },
    statusDetails: {
      shape: _DetailsMap
    },
    stepTimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
