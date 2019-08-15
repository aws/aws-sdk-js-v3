import { _ConfigurationSets } from "./_ConfigurationSets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSets: {
      shape: _ConfigurationSets
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
