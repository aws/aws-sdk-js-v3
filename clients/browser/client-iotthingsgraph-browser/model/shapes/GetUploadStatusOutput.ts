import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUploadStatusOutput: _Structure_ = {
  type: "structure",
  required: ["uploadId", "uploadStatus", "createdDate"],
  members: {
    uploadId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    uploadStatus: {
      shape: {
        type: "string"
      }
    },
    namespaceArn: {
      shape: {
        type: "string"
      }
    },
    namespaceName: {
      shape: {
        type: "string"
      }
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    },
    failureReason: {
      shape: _StringList
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
