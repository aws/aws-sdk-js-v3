import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidLambdaFunctionException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FunctionArn: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidLambdaFunctionException",
  exceptionCode: "InvalidLambdaFunction"
};
