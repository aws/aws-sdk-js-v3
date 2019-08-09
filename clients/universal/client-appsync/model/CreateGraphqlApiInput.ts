import { _LogConfig } from "./_LogConfig";
import { _UserPoolConfig } from "./_UserPoolConfig";
import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _TagMap } from "./_TagMap";
import { _AdditionalAuthenticationProviders } from "./_AdditionalAuthenticationProviders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGraphqlApiInput: _Structure_ = {
  type: "structure",
  required: ["name", "authenticationType"],
  members: {
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
    tags: {
      shape: _TagMap
    },
    additionalAuthenticationProviders: {
      shape: _AdditionalAuthenticationProviders
    }
  }
};
