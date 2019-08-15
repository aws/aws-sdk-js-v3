import { _ConfigurationAggregatorNameList } from "./_ConfigurationAggregatorNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationAggregatorsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationAggregatorNames: {
      shape: _ConfigurationAggregatorNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
