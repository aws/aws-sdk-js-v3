import { _ConfigurationSetNameList } from "./_ConfigurationSetNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSets: {
      shape: _ConfigurationSetNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
