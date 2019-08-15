import { _DocumentServiceWarnings } from "./_DocumentServiceWarnings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadDocumentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    adds: {
      shape: {
        type: "integer"
      }
    },
    deletes: {
      shape: {
        type: "integer"
      }
    },
    warnings: {
      shape: _DocumentServiceWarnings
    }
  }
};
