import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFunctionDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionDefinitionId"],
  members: {
    FunctionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FunctionDefinitionId"
    }
  }
};
