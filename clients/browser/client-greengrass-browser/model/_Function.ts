import { _FunctionConfiguration } from "./_FunctionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Function: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    FunctionArn: {
      shape: {
        type: "string"
      }
    },
    FunctionConfiguration: {
      shape: _FunctionConfiguration
    },
    Id: {
      shape: {
        type: "string"
      }
    }
  }
};
