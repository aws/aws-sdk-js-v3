import { _InputLambdaProcessorDescription } from "./_InputLambdaProcessorDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputProcessingConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputLambdaProcessorDescription: {
      shape: _InputLambdaProcessorDescription
    }
  }
};
