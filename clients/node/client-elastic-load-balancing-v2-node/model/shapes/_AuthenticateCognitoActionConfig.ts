import { _AuthenticateCognitoActionAuthenticationRequestExtraParams } from "./_AuthenticateCognitoActionAuthenticationRequestExtraParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthenticateCognitoActionConfig: _Structure_ = {
  type: "structure",
  required: ["UserPoolArn", "UserPoolClientId", "UserPoolDomain"],
  members: {
    UserPoolArn: {
      shape: {
        type: "string"
      }
    },
    UserPoolClientId: {
      shape: {
        type: "string"
      }
    },
    UserPoolDomain: {
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
      shape: _AuthenticateCognitoActionAuthenticationRequestExtraParams
    },
    OnUnauthenticatedRequest: {
      shape: {
        type: "string"
      }
    }
  }
};
