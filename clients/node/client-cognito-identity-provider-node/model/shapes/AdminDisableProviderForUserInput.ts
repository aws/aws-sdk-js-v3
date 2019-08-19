import { _ProviderUserIdentifierType } from "./_ProviderUserIdentifierType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminDisableProviderForUserInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "User"],
  members: {
    UserPoolId: {
      shape: {
        type: "string"
      }
    },
    User: {
      shape: _ProviderUserIdentifierType
    }
  }
};
