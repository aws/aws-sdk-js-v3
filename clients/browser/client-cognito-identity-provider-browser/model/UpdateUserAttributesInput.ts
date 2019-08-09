import { _AttributeListType } from "./_AttributeListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserAttributesInput: _Structure_ = {
  type: "structure",
  required: ["UserAttributes", "AccessToken"],
  members: {
    UserAttributes: {
      shape: _AttributeListType
    },
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
