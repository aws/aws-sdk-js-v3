import { _ConfigurationRecorderNameList } from "./_ConfigurationRecorderNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRecorderStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationRecorderNames: {
      shape: _ConfigurationRecorderNameList
    }
  }
};
