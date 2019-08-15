import { _ThingIndexingConfiguration } from "./_ThingIndexingConfiguration";
import { _ThingGroupIndexingConfiguration } from "./_ThingGroupIndexingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIndexingConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingIndexingConfiguration: {
      shape: _ThingIndexingConfiguration
    },
    thingGroupIndexingConfiguration: {
      shape: _ThingGroupIndexingConfiguration
    }
  }
};
