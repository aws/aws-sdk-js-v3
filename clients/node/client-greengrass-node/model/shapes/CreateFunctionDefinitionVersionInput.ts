import { _FunctionDefaultConfig } from "./_FunctionDefaultConfig";
import { ___listOfFunction } from "./___listOfFunction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFunctionDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    DefaultConfig: {
      shape: _FunctionDefaultConfig
    },
    FunctionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FunctionDefinitionId"
    },
    Functions: {
      shape: ___listOfFunction
    }
  }
};
