import { _FunctionConfiguration } from "./_FunctionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFunctionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functionConfiguration: {
      shape: _FunctionConfiguration
    }
  }
};
