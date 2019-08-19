import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNamespaceDeletionStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    status: {
      shape: {
        type: "string"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
