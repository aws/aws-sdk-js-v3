import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditMitigationActionsTasksInput: _Structure_ = {
  type: "structure",
  required: ["startTime", "endTime"],
  members: {
    auditTaskId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "auditTaskId"
    },
    findingId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "findingId"
    },
    taskStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "taskStatus"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
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
    }
  }
};
