import { _AttributeNameListType } from "./_AttributeNameListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminDeleteUserAttributesInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "UserAttributeNames"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserAttributeNames: {
      shape: _AttributeNameListType
    }
  }
};
