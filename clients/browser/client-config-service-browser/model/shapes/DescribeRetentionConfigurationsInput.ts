import { _RetentionConfigurationNameList } from "./_RetentionConfigurationNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRetentionConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RetentionConfigurationNames: {
      shape: _RetentionConfigurationNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
