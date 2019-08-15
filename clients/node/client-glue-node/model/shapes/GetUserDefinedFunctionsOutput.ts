import { _UserDefinedFunctionList } from "./_UserDefinedFunctionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserDefinedFunctionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserDefinedFunctions: {
      shape: _UserDefinedFunctionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
