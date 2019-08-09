import { _ResourceIdentifiersList } from "./_ResourceIdentifiersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetAggregateResourceConfigInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName", "ResourceIdentifiers"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceIdentifiers: {
      shape: _ResourceIdentifiersList
    }
  }
};
