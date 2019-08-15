import { _BaseConfigurationItems } from "./_BaseConfigurationItems";
import { _UnprocessedResourceIdentifierList } from "./_UnprocessedResourceIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetAggregateResourceConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaseConfigurationItems: {
      shape: _BaseConfigurationItems
    },
    UnprocessedResourceIdentifiers: {
      shape: _UnprocessedResourceIdentifierList
    }
  }
};
