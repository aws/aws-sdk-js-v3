import { _UserDefinedFunction } from "./_UserDefinedFunction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserDefinedFunctionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserDefinedFunction: {
      shape: _UserDefinedFunction
    }
  }
};
