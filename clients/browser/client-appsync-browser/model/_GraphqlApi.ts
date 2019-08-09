import { _LogConfig } from "./_LogConfig";
import { _UserPoolConfig } from "./_UserPoolConfig";
import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { _TagMap } from "./_TagMap";
import { _AdditionalAuthenticationProviders } from "./_AdditionalAuthenticationProviders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GraphqlApi: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    apiId: {
      shape: {
        type: "string"
      }
    },
    authenticationType: {
      shape: {
        type: "string"
      }
    },
    logConfig: {
      shape: _LogConfig
    },
    userPoolConfig: {
      shape: _UserPoolConfig
    },
    openIDConnectConfig: {
      shape: _OpenIDConnectConfig
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    uris: {
      shape: _MapOfStringToString
    },
    tags: {
      shape: _TagMap
    },
    additionalAuthenticationProviders: {
      shape: _AdditionalAuthenticationProviders
    }
  }
};
