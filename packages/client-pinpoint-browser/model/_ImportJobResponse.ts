import { _ImportJobResource } from "./_ImportJobResource";
import { _ListOf__string } from "./_ListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportJobResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    CompletedPieces: {
      shape: {
        type: "integer"
      }
    },
    CompletionDate: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    Definition: {
      shape: _ImportJobResource
    },
    FailedPieces: {
      shape: {
        type: "integer"
      }
    },
    Failures: {
      shape: _ListOf__string
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    TotalFailures: {
      shape: {
        type: "integer"
      }
    },
    TotalPieces: {
      shape: {
        type: "integer"
      }
    },
    TotalProcessed: {
      shape: {
        type: "integer"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
