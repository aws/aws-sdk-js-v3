import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _CognitoUserPoolConfig } from "./_CognitoUserPoolConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AdditionalAuthenticationProvider: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authenticationType: {
      shape: {
        type: "string"
      }
    },
    openIDConnectConfig: {
      shape: _OpenIDConnectConfig
    },
    userPoolConfig: {
      shape: _CognitoUserPoolConfig
    }
  }
};
