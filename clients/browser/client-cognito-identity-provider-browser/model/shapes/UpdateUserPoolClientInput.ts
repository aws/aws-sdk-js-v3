import { _ClientPermissionListType } from "./_ClientPermissionListType";
import { _ExplicitAuthFlowsListType } from "./_ExplicitAuthFlowsListType";
import { _SupportedIdentityProvidersListType } from "./_SupportedIdentityProvidersListType";
import { _CallbackURLsListType } from "./_CallbackURLsListType";
import { _LogoutURLsListType } from "./_LogoutURLsListType";
import { _OAuthFlowsType } from "./_OAuthFlowsType";
import { _ScopeListType } from "./_ScopeListType";
import { _AnalyticsConfigurationType } from "./_AnalyticsConfigurationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserPoolClientInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ClientId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    ClientName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RefreshTokenValidity: {
      shape: {
        type: "integer"
      }
    },
    ReadAttributes: {
      shape: _ClientPermissionListType
    },
    WriteAttributes: {
      shape: _ClientPermissionListType
    },
    ExplicitAuthFlows: {
      shape: _ExplicitAuthFlowsListType
    },
    SupportedIdentityProviders: {
      shape: _SupportedIdentityProvidersListType
    },
    CallbackURLs: {
      shape: _CallbackURLsListType
    },
    LogoutURLs: {
      shape: _LogoutURLsListType
    },
    DefaultRedirectURI: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AllowedOAuthFlows: {
      shape: _OAuthFlowsType
    },
    AllowedOAuthScopes: {
      shape: _ScopeListType
    },
    AllowedOAuthFlowsUserPoolClient: {
      shape: {
        type: "boolean"
      }
    },
    AnalyticsConfiguration: {
      shape: _AnalyticsConfigurationType
    }
  }
};
