import { DescribeAgentsInput } from "../shapes/DescribeAgentsInput";
import { DescribeAgentsOutput } from "../shapes/DescribeAgentsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAgents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAgents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAgentsInput
  },
  output: {
    shape: DescribeAgentsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
