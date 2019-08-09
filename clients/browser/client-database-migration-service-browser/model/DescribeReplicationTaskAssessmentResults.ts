import { DescribeReplicationTaskAssessmentResultsInput } from "./DescribeReplicationTaskAssessmentResultsInput";
import { DescribeReplicationTaskAssessmentResultsOutput } from "./DescribeReplicationTaskAssessmentResultsOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReplicationTaskAssessmentResults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationTaskAssessmentResults",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationTaskAssessmentResultsInput
  },
  output: {
    shape: DescribeReplicationTaskAssessmentResultsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
