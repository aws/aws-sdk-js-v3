import { _ProviderDetailsType } from "./_ProviderDetailsType";
import { _AttributeMappingType } from "./_AttributeMappingType";
import { _IdpIdentifiersListType } from "./_IdpIdentifiersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIdentityProviderInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ProviderName"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProviderDetails: {
      shape: _ProviderDetailsType
    },
    AttributeMapping: {
      shape: _AttributeMappingType
    },
    IdpIdentifiers: {
      shape: _IdpIdentifiersListType
    }
  }
};
