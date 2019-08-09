import { _AuthenticateOidcActionConfig } from "./_AuthenticateOidcActionConfig";
import { _AuthenticateCognitoActionConfig } from "./_AuthenticateCognitoActionConfig";
import { _RedirectActionConfig } from "./_RedirectActionConfig";
import { _FixedResponseActionConfig } from "./_FixedResponseActionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Action: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    },
    AuthenticateOidcConfig: {
      shape: _AuthenticateOidcActionConfig
    },
    AuthenticateCognitoConfig: {
      shape: _AuthenticateCognitoActionConfig
    },
    Order: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RedirectConfig: {
      shape: _RedirectActionConfig
    },
    FixedResponseConfig: {
      shape: _FixedResponseActionConfig
    }
  }
};
