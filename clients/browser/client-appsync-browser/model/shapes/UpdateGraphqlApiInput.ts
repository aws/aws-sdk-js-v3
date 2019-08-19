import { _LogConfig } from "./_LogConfig";
import { _UserPoolConfig } from "./_UserPoolConfig";
import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _AdditionalAuthenticationProviders } from "./_AdditionalAuthenticationProviders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGraphqlApiInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "name"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    name: {
      shape: {
        type: "string"
      }
    },
    logConfig: {
      shape: _LogConfig
    },
    authenticationType: {
      shape: {
        type: "string"
      }
    },
    userPoolConfig: {
      shape: _UserPoolConfig
    },
    openIDConnectConfig: {
      shape: _OpenIDConnectConfig
    },
    additionalAuthenticationProviders: {
      shape: _AdditionalAuthenticationProviders
    }
  }
};
