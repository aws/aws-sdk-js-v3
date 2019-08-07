import { _IdentityProviders } from "./_IdentityProviders";
import { _OIDCProviderList } from "./_OIDCProviderList";
import { _CognitoIdentityProviderList } from "./_CognitoIdentityProviderList";
import { _SAMLProviderList } from "./_SAMLProviderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityPoolOutput: _Structure_ = {
  type: "structure",
  required: [
    "IdentityPoolId",
    "IdentityPoolName",
    "AllowUnauthenticatedIdentities"
  ],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IdentityPoolName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AllowUnauthenticatedIdentities: {
      shape: {
        type: "boolean"
      }
    },
    SupportedLoginProviders: {
      shape: _IdentityProviders
    },
    DeveloperProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OpenIdConnectProviderARNs: {
      shape: _OIDCProviderList
    },
    CognitoIdentityProviders: {
      shape: _CognitoIdentityProviderList
    },
    SamlProviderARNs: {
      shape: _SAMLProviderList
    }
  }
};
