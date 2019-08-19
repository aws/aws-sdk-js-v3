import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteJobExecutionInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "thingName", "executionNumber"],
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
    executionNumber: {
      shape: {
        type: "integer"
      },
      location: "uri",
      locationName: "executionNumber"
    },
    force: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "force"
    }
  }
};
