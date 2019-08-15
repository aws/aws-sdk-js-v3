import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["FunctionDefinitionId"],
  members: {
    FunctionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FunctionDefinitionId"
    },
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
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
