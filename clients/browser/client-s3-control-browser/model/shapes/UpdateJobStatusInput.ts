import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobStatusInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "JobId", "RequestedJobStatus"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-account-id"
    },
    JobId: {
      shape: {
        type: "string",
        min: 5
      },
      location: "uri",
      locationName: "id"
    },
    RequestedJobStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "requestedJobStatus"
    },
    StatusUpdateReason: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "statusUpdateReason"
    }
  }
};
