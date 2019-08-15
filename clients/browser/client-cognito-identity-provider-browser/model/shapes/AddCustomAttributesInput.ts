import { _CustomAttributesListType } from "./_CustomAttributesListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddCustomAttributesInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "CustomAttributes"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CustomAttributes: {
      shape: _CustomAttributesListType
    }
  }
};
