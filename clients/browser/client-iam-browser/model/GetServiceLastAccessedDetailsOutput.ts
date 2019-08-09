import { _ServicesLastAccessed } from "./_ServicesLastAccessed";
import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceLastAccessedDetailsOutput: _Structure_ = {
  type: "structure",
  required: [
    "JobStatus",
    "JobCreationDate",
    "ServicesLastAccessed",
    "JobCompletionDate"
  ],
  members: {
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    JobCreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServicesLastAccessed: {
      shape: _ServicesLastAccessed
    },
    JobCompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    Error: {
      shape: _ErrorDetails
    }
  }
};
