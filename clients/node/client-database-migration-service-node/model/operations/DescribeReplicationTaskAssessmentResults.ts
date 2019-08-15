import { DescribeReplicationTaskAssessmentResultsInput } from "../shapes/DescribeReplicationTaskAssessmentResultsInput";
import { DescribeReplicationTaskAssessmentResultsOutput } from "../shapes/DescribeReplicationTaskAssessmentResultsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
