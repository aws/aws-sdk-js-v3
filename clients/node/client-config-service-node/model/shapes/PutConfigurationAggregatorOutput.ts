import { _ConfigurationAggregator } from "./_ConfigurationAggregator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigurationAggregatorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationAggregator: {
      shape: _ConfigurationAggregator
    }
  }
};
