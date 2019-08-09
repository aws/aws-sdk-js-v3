import { _ConfigurationIdList } from "./_ConfigurationIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["configurationIds"],
  members: {
    configurationIds: {
      shape: _ConfigurationIdList
    }
  }
};
