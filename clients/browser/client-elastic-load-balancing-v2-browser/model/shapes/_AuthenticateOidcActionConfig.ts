import { _AuthenticateOidcActionAuthenticationRequestExtraParams } from "./_AuthenticateOidcActionAuthenticationRequestExtraParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthenticateOidcActionConfig: _Structure_ = {
  type: "structure",
  required: [
    "Issuer",
    "AuthorizationEndpoint",
    "TokenEndpoint",
    "UserInfoEndpoint",
    "ClientId"
  ],
  members: {
    Issuer: {
      shape: {
        type: "string"
      }
    },
    AuthorizationEndpoint: {
      shape: {
        type: "string"
      }
    },
    TokenEndpoint: {
      shape: {
        type: "string"
      }
    },
    UserInfoEndpoint: {
      shape: {
        type: "string"
      }
    },
    ClientId: {
      shape: {
        type: "string"
      }
    },
    ClientSecret: {
      shape: {
        type: "string"
      }
    },
    SessionCookieName: {
      shape: {
        type: "string"
      }
    },
    Scope: {
      shape: {
        type: "string"
      }
    },
    SessionTimeout: {
      shape: {
        type: "integer"
      }
    },
    AuthenticationRequestExtraParams: {
      shape: _AuthenticateOidcActionAuthenticationRequestExtraParams
    },
    OnUnauthenticatedRequest: {
      shape: {
        type: "string"
      }
    },
    UseExistingClientSecret: {
      shape: {
        type: "boolean"
      }
    }
  }
};
