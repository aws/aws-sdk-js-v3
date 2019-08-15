import { _JobOperation } from "./_JobOperation";
import { _JobReport } from "./_JobReport";
import { _JobManifest } from "./_JobManifest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobInput: _Structure_ = {
  type: "structure",
  required: [
    "AccountId",
    "Operation",
    "Report",
    "ClientRequestToken",
    "Manifest",
    "Priority",
    "RoleArn"
  ],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-account-id"
    },
    ConfirmationRequired: {
      shape: {
        type: "boolean"
      }
    },
    Operation: {
      shape: _JobOperation
    },
    Report: {
      shape: _JobReport
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Manifest: {
      shape: _JobManifest
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Priority: {
      shape: {
        type: "integer"
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
