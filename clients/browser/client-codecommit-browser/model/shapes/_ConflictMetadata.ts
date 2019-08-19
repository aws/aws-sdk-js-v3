import { _FileSizes } from "./_FileSizes";
import { _FileModes } from "./_FileModes";
import { _ObjectTypes } from "./_ObjectTypes";
import { _IsBinaryFile } from "./_IsBinaryFile";
import { _MergeOperations } from "./_MergeOperations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConflictMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filePath: {
      shape: {
        type: "string"
      }
    },
    fileSizes: {
      shape: _FileSizes
    },
    fileModes: {
      shape: _FileModes
    },
    objectTypes: {
      shape: _ObjectTypes
    },
    numberOfConflicts: {
      shape: {
        type: "integer"
      }
    },
    isBinaryFile: {
      shape: _IsBinaryFile
    },
    contentConflict: {
      shape: {
        type: "boolean"
      }
    },
    fileModeConflict: {
      shape: {
        type: "boolean"
      }
    },
    objectTypeConflict: {
      shape: {
        type: "boolean"
      }
    },
    mergeOperations: {
      shape: _MergeOperations
    }
  }
};
