import { _LambdaFunctionAssociationList } from "./_LambdaFunctionAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionAssociations: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _LambdaFunctionAssociationList
    }
  }
};
