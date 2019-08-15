import { _RepositoryTriggersList } from "./_RepositoryTriggersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRepositoryTriggersInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "triggers"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    triggers: {
      shape: _RepositoryTriggersList
    }
  }
};
