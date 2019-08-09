import { ___listOfVersionInformation } from "./___listOfVersionInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCoreDefinitionVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Versions: {
      shape: ___listOfVersionInformation
    }
  }
};
