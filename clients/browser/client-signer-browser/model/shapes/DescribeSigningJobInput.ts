import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSigningJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId"],
  members: {
    jobId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "jobId"
    }
  }
};
