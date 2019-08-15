import { _LoggerDefinitionVersion } from "./_LoggerDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoggerDefinitionVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "string"
      }
    },
    Definition: {
      shape: _LoggerDefinitionVersion
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
