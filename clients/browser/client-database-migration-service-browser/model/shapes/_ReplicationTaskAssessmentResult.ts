import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationTaskAssessmentResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTaskIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskLastAssessmentDate: {
      shape: {
        type: "timestamp"
      }
    },
    AssessmentStatus: {
      shape: {
        type: "string"
      }
    },
    AssessmentResultsFile: {
      shape: {
        type: "string"
      }
    },
    AssessmentResults: {
      shape: {
        type: "string"
      }
    },
    S3ObjectUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
