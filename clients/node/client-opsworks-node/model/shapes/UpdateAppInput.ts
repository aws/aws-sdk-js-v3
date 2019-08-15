import { _DataSources } from "./_DataSources";
import { _Source } from "./_Source";
import { _Strings } from "./_Strings";
import { _SslConfiguration } from "./_SslConfiguration";
import { _AppAttributes } from "./_AppAttributes";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAppInput: _Structure_ = {
  type: "structure",
  required: ["AppId"],
  members: {
    AppId: {
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
    Environment: {
      shape: _EnvironmentVariables
    }
  }
};
