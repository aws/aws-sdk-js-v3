import { _JobStatusList } from "./_JobStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-account-id"
    },
    JobStatuses: {
      shape: _JobStatusList,
      location: "querystring",
      locationName: "jobStatuses"
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "nextToken"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
