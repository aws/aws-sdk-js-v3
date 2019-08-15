import { _InputLambdaProcessorUpdate } from "./_InputLambdaProcessorUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputProcessingConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: ["InputLambdaProcessorUpdate"],
  members: {
    InputLambdaProcessorUpdate: {
      shape: _InputLambdaProcessorUpdate
    }
  }
};
