import { _DataSources } from "./_DataSources";
import { _Source } from "./_Source";
import { _Strings } from "./_Strings";
import { _SslConfiguration } from "./_SslConfiguration";
import { _AppAttributes } from "./_AppAttributes";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _App: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AppId: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    Shortname: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DataSources: {
      shape: _DataSources
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    AppSource: {
      shape: _Source
    },
    Domains: {
      shape: _Strings
    },
    EnableSsl: {
      shape: {
        type: "boolean"
      }
    },
    SslConfiguration: {
      shape: _SslConfiguration
    },
    Attributes: {
      shape: _AppAttributes
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    Environment: {
      shape: _EnvironmentVariables
    }
  }
};
