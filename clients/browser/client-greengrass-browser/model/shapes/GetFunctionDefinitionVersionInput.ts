import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionDefinitionId", "FunctionDefinitionVersionId"],
  members: {
    FunctionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FunctionDefinitionId"
    },
    FunctionDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FunctionDefinitionVersionId"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};
