import { ___listOfDefinitionInformation } from "./___listOfDefinitionInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionDefinitionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Definitions: {
      shape: ___listOfDefinitionInformation
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
