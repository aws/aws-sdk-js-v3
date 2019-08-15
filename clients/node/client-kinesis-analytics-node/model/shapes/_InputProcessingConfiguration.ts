import { _InputLambdaProcessor } from "./_InputLambdaProcessor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputProcessingConfiguration: _Structure_ = {
  type: "structure",
  required: ["InputLambdaProcessor"],
  members: {
    InputLambdaProcessor: {
      shape: _InputLambdaProcessor
    }
  }
};
