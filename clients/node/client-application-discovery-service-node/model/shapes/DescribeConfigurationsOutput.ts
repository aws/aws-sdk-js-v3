import { _DescribeConfigurationsAttributes } from "./_DescribeConfigurationsAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configurations: {
      shape: _DescribeConfigurationsAttributes
    }
  }
};
