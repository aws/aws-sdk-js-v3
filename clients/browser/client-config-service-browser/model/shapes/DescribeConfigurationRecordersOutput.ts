import { _ConfigurationRecorderList } from "./_ConfigurationRecorderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRecordersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationRecorders: {
      shape: _ConfigurationRecorderList
    }
  }
};
