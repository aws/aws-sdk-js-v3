import { DescribeRobotApplicationInput } from "./DescribeRobotApplicationInput";
import { DescribeRobotApplicationOutput } from "./DescribeRobotApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
