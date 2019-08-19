import { _SourceFileSpecifier } from "./_SourceFileSpecifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PutFileEntry: _Structure_ = {
  type: "structure",
  required: ["filePath"],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    fileMode: {
      shape: {
        type: "string"
      }
    },
    fileContent: {
      shape: {
        type: "blob"
      }
    },
    sourceFile: {
      shape: _SourceFileSpecifier
    }
  }
};
