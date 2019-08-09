import { _AttributeListType } from "./_AttributeListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminUpdateUserAttributesInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "UserAttributes"],
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
    UserAttributes: {
      shape: _AttributeListType
    }
  }
};
