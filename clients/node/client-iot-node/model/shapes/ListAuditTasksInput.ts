import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditTasksInput: _Structure_ = {
  type: "structure",
  required: ["startTime", "endTime"],
  members: {
    startTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "startTime"
    },
    endTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "endTime"
    },
    taskType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "taskType"
    },
    taskStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "taskStatus"
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
