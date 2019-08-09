import { _AggregatedSourceStatusList } from "./_AggregatedSourceStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationAggregatorSourcesStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregatedSourceStatusList: {
      shape: _AggregatedSourceStatusList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
