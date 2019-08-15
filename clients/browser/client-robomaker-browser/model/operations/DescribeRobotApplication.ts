import { DescribeRobotApplicationInput } from "../shapes/DescribeRobotApplicationInput";
import { DescribeRobotApplicationOutput } from "../shapes/DescribeRobotApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRobotApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRobotApplication",
  http: {
    method: "POST",
    requestUri: "/describeRobotApplication"
  },
  input: {
    shape: DescribeRobotApplicationInput
  },
  output: {
    shape: DescribeRobotApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
