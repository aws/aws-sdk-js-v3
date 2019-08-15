import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelJobInput: _Structure_ = {
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
    reasonCode: {
      shape: {
        type: "string"
      }
    },
    comment: {
      shape: {
        type: "string"
      }
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
