import { _ReplicationTaskAssessmentResultList } from "./_ReplicationTaskAssessmentResultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationTaskAssessmentResultsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    BucketName: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskAssessmentResults: {
      shape: _ReplicationTaskAssessmentResultList
    }
  }
};
