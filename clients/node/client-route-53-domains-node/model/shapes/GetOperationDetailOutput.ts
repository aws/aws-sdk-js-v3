import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOperationDetailOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperationId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    DomainName: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    SubmittedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
