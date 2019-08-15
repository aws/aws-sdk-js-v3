import { _Job } from "./_Job";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    documentSource: {
      shape: {
        type: "string",
        min: 1
      }
    },
    job: {
      shape: _Job
    }
  }
};
