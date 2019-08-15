import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidLayerPartException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    uploadId: {
      shape: {
        type: "string"
      }
    },
    lastValidByteReceived: {
      shape: {
        type: "integer"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidLayerPartException"
};
