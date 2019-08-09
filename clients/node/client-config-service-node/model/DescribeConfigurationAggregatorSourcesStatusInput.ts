import { _AggregatedSourceStatusTypeList } from "./_AggregatedSourceStatusTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationAggregatorSourcesStatusInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UpdateStatus: {
      shape: _AggregatedSourceStatusTypeList
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
