import { _ConfigurationRecorderStatusList } from "./_ConfigurationRecorderStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRecorderStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationRecordersStatus: {
      shape: _ConfigurationRecorderStatusList
    }
  }
};
