import { _AttributeNameListType } from "./_AttributeNameListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserAttributesInput: _Structure_ = {
  type: "structure",
  required: ["UserAttributeNames", "AccessToken"],
  members: {
    UserAttributeNames: {
      shape: _AttributeNameListType
    },
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
