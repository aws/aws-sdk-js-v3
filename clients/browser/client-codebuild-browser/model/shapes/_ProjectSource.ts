import { _GitSubmodulesConfig } from "./_GitSubmodulesConfig";
import { _SourceAuth } from "./_SourceAuth";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectSource: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    gitCloneDepth: {
      shape: {
        type: "integer"
      }
    },
    gitSubmodulesConfig: {
      shape: _GitSubmodulesConfig
    },
    buildspec: {
      shape: {
        type: "string"
      }
    },
    auth: {
      shape: _SourceAuth
    },
    reportBuildStatus: {
      shape: {
        type: "boolean"
      }
    },
    insecureSsl: {
      shape: {
        type: "boolean"
      }
    },
    sourceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
