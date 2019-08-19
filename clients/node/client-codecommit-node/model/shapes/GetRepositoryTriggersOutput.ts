import { _RepositoryTriggersList } from "./_RepositoryTriggersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRepositoryTriggersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configurationId: {
      shape: {
        type: "string"
      }
    },
    triggers: {
      shape: _RepositoryTriggersList
    }
  }
};
