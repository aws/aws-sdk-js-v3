import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    importTaskId: {
      shape: {
        type: "string"
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    importUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    importRequestTime: {
      shape: {
        type: "timestamp"
      }
    },
    importCompletionTime: {
      shape: {
        type: "timestamp"
      }
    },
    importDeletedTime: {
      shape: {
        type: "timestamp"
      }
    },
    serverImportSuccess: {
      shape: {
        type: "integer"
      }
    },
    serverImportFailure: {
      shape: {
        type: "integer"
      }
    },
    applicationImportSuccess: {
      shape: {
        type: "integer"
      }
    },
    applicationImportFailure: {
      shape: {
        type: "integer"
      }
    },
    errorsAndFailedEntriesZip: {
      shape: {
        type: "string"
      }
    }
  }
};
