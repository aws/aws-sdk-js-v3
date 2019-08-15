import { _JobDescriptor } from "./_JobDescriptor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Job: {
      shape: _JobDescriptor
    }
  }
};
