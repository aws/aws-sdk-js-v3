import { _ConfigurationItem } from "./_ConfigurationItem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateResourceConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationItem: {
      shape: _ConfigurationItem
    }
  }
};
