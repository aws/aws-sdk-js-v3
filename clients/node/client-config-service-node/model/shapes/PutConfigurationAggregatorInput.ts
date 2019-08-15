import { _AccountAggregationSourceList } from "./_AccountAggregationSourceList";
import { _OrganizationAggregationSource } from "./_OrganizationAggregationSource";
import { _TagsList } from "./_TagsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigurationAggregatorInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccountAggregationSources: {
      shape: _AccountAggregationSourceList
    },
    OrganizationAggregationSource: {
      shape: _OrganizationAggregationSource
    },
    Tags: {
      shape: _TagsList
    }
  }
};
