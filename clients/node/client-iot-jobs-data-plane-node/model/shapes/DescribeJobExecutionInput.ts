import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobExecutionInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "thingName"],
  members: {
    jobId: {
      shape: {
        type: "string"
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
    includeJobDocument: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeJobDocument"
    },
    executionNumber: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "executionNumber"
    }
  }
};
