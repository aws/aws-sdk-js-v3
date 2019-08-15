import { _AccessDetails } from "./_AccessDetails";
import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOrganizationsAccessReportOutput: _Structure_ = {
  type: "structure",
  required: ["JobStatus", "JobCreationDate"],
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
    JobCompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    NumberOfServicesAccessible: {
      shape: {
        type: "integer"
      }
    },
    NumberOfServicesNotAccessed: {
      shape: {
        type: "integer"
      }
    },
    AccessDetails: {
      shape: _AccessDetails
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorDetails: {
      shape: _ErrorDetails
    }
  }
};
