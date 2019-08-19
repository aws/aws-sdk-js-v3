import { _RuntimeConfiguration } from "./_RuntimeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRuntimeConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuntimeConfiguration: {
      shape: _RuntimeConfiguration
    }
  }
};
