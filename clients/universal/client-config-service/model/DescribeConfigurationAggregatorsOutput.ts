import { _ConfigurationAggregatorList } from "./_ConfigurationAggregatorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationAggregatorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationAggregators: {
      shape: _ConfigurationAggregatorList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
