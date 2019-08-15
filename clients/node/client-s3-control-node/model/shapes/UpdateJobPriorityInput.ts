import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobPriorityInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "JobId", "Priority"],
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
    Priority: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "priority"
    }
  }
};
