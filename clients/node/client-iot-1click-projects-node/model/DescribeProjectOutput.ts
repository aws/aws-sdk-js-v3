import { _ProjectDescription } from "./_ProjectDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProjectOutput: _Structure_ = {
  type: "structure",
  required: ["project"],
  members: {
    project: {
      shape: _ProjectDescription
    }
  }
};
