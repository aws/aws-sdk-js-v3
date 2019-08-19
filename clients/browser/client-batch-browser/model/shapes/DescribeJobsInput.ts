import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobsInput: _Structure_ = {
  type: "structure",
  required: ["jobs"],
  members: {
    jobs: {
      shape: _StringList
    }
  }
};
