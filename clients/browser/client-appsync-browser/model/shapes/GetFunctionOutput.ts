import { _FunctionConfiguration } from "./_FunctionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functionConfiguration: {
      shape: _FunctionConfiguration
    }
  }
};
