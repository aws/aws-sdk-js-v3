import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserDefinedFunctionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "FunctionName"],
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
    }
  }
};
