import { DescribeJobFlowsInput } from "../shapes/DescribeJobFlowsInput";
import { DescribeJobFlowsOutput } from "../shapes/DescribeJobFlowsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJobFlows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJobFlows",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeJobFlowsInput
  },
  output: {
    shape: DescribeJobFlowsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
