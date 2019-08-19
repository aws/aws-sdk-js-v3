import { _FunctionDefaultConfig } from "./_FunctionDefaultConfig";
import { ___listOfFunction } from "./___listOfFunction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionDefinitionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultConfig: {
      shape: _FunctionDefaultConfig
    },
    Functions: {
      shape: ___listOfFunction
    }
  }
};
