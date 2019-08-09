import { DescribeAgentInput } from "./DescribeAgentInput";
import { DescribeAgentOutput } from "./DescribeAgentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAgent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAgent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAgentInput
  },
  output: {
    shape: DescribeAgentOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
