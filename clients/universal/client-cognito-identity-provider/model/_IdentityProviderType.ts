import { _ProviderDetailsType } from "./_ProviderDetailsType";
import { _AttributeMappingType } from "./_AttributeMappingType";
import { _IdpIdentifiersListType } from "./_IdpIdentifiersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityProviderType: _Structure_ = {
  type: "structure",
  required: [],
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
    ProviderType: {
      shape: {
        type: "string"
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
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
