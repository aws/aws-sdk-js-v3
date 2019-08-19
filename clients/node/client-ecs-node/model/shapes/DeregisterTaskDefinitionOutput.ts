import { _TaskDefinition } from "./_TaskDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterTaskDefinitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskDefinition: {
      shape: _TaskDefinition
    }
  }
};
