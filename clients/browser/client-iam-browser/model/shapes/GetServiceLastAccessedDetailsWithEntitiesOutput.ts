import { _entityDetailsListType } from "./_entityDetailsListType";
import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceLastAccessedDetailsWithEntitiesOutput: _Structure_ = {
  type: "structure",
  required: [
    "JobStatus",
    "JobCreationDate",
    "JobCompletionDate",
    "EntityDetailsList"
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
    JobCompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    EntityDetailsList: {
      shape: _entityDetailsListType
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
