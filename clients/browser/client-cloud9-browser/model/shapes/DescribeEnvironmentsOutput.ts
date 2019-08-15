import { _EnvironmentList } from "./_EnvironmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    environments: {
      shape: _EnvironmentList
    }
  }
};
