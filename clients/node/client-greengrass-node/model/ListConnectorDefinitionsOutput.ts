import { ___listOfDefinitionInformation } from "./___listOfDefinitionInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConnectorDefinitionsOutput: _Structure_ = {
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
