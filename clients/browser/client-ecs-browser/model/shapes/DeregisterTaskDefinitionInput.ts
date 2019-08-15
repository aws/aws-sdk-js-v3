import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterTaskDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["taskDefinition"],
  members: {
    taskDefinition: {
      shape: {
        type: "string"
      }
    }
  }
};
