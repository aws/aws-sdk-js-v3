import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskExecutionResultDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrepareDuration: {
      shape: {
        type: "integer"
      }
    },
    PrepareStatus: {
      shape: {
        type: "string"
      }
    },
    TransferDuration: {
      shape: {
        type: "integer"
      }
    },
    TransferStatus: {
      shape: {
        type: "string"
      }
    },
    VerifyDuration: {
      shape: {
        type: "integer"
      }
    },
    VerifyStatus: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorDetail: {
      shape: {
        type: "string"
      }
    }
  }
};
