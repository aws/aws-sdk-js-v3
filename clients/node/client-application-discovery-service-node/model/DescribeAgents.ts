import { DescribeAgentsInput } from "./DescribeAgentsInput";
import { DescribeAgentsOutput } from "./DescribeAgentsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
