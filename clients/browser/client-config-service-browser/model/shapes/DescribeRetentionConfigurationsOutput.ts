import { _RetentionConfigurationList } from "./_RetentionConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRetentionConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RetentionConfigurations: {
      shape: _RetentionConfigurationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
