import { _EnvironmentResourceDescription } from "./_EnvironmentResourceDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentResources: {
      shape: _EnvironmentResourceDescription
    }
  }
};
