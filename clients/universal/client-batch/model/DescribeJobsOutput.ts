import { _JobDetailList } from "./_JobDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _JobDetailList
    }
  }
};
