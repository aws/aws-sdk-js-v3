import { _AggregateResourceIdentifier } from "./_AggregateResourceIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateResourceConfigInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName", "ResourceIdentifier"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceIdentifier: {
      shape: _AggregateResourceIdentifier
    }
  }
};
