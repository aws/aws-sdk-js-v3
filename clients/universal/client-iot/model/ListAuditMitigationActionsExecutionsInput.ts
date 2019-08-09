import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditMitigationActionsExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["taskId", "findingId"],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "taskId"
    },
    actionStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "actionStatus"
    },
    findingId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "findingId"
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
    }
  }
};
