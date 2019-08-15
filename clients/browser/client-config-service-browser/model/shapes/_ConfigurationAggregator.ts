import { _AccountAggregationSourceList } from "./_AccountAggregationSourceList";
import { _OrganizationAggregationSource } from "./_OrganizationAggregationSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationAggregator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConfigurationAggregatorArn: {
      shape: {
        type: "string"
      }
    },
    AccountAggregationSources: {
      shape: _AccountAggregationSourceList
    },
    OrganizationAggregationSource: {
      shape: _OrganizationAggregationSource
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
