import { _ProviderUserIdentifierType } from "./_ProviderUserIdentifierType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminLinkProviderForUserInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "DestinationUser", "SourceUser"],
  members: {
    UserPoolId: {
      shape: {
        type: "string"
      }
    },
    DestinationUser: {
      shape: _ProviderUserIdentifierType
    },
    SourceUser: {
      shape: _ProviderUserIdentifierType
    }
  }
};
