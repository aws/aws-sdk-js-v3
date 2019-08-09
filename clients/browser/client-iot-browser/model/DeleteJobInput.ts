import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteJobInput: _Structure_ = {
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
    force: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "force"
    }
  }
};
