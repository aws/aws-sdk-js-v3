import { List as _List_ } from "@aws-sdk/types";
import { _LambdaFunctionAssociation } from "./_LambdaFunctionAssociation";

export const _LambdaFunctionAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _LambdaFunctionAssociation,
    locationName: "LambdaFunctionAssociation"
  }
};
