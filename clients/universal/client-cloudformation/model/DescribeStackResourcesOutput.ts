import { _StackResources } from "./_StackResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackResources: {
      shape: _StackResources
    }
  }
};
