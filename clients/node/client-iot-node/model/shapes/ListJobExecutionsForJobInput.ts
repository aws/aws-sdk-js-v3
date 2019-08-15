import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobExecutionsForJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "jobId"
    },
    status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
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
