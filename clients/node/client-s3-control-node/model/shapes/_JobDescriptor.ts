import { _JobManifest } from "./_JobManifest";
import { _JobOperation } from "./_JobOperation";
import { _JobProgressSummary } from "./_JobProgressSummary";
import { _JobFailureList } from "./_JobFailureList";
import { _JobReport } from "./_JobReport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobDescriptor: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 5
      }
    },
    ConfirmationRequired: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Manifest: {
      shape: _JobManifest
    },
    Operation: {
      shape: _JobOperation
    },
    Priority: {
      shape: {
        type: "integer"
      }
    },
    ProgressSummary: {
      shape: _JobProgressSummary
    },
    StatusUpdateReason: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FailureReasons: {
      shape: _JobFailureList
    },
    Report: {
      shape: _JobReport
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TerminationDate: {
      shape: {
        type: "timestamp"
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SuspendedDate: {
      shape: {
        type: "timestamp"
      }
    },
    SuspendedCause: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
