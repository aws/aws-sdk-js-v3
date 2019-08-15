import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterJobDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["jobDefinition"],
  members: {
    jobDefinition: {
      shape: {
        type: "string"
      }
    }
  }
};
