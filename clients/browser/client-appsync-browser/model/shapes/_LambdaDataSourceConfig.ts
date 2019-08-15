import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaDataSourceConfig: _Structure_ = {
  type: "structure",
  required: ["lambdaFunctionArn"],
  members: {
    lambdaFunctionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
