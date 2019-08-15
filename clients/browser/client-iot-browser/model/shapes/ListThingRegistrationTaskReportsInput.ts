import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingRegistrationTaskReportsInput: _Structure_ = {
  type: "structure",
  required: ["taskId", "reportType"],
  members: {
    taskId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "taskId"
    },
    reportType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "reportType"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
