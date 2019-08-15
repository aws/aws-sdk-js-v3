import { _UserDefinedFunctionInput } from "./_UserDefinedFunctionInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserDefinedFunctionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "FunctionName", "FunctionInput"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FunctionInput: {
      shape: _UserDefinedFunctionInput
    }
  }
};
