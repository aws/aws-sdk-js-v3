import { DescribeRobotInput } from "./DescribeRobotInput";
import { DescribeRobotOutput } from "./DescribeRobotOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRobot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRobot",
  http: {
    method: "POST",
    requestUri: "/describeRobot"
  },
  input: {
    shape: DescribeRobotInput
  },
  output: {
    shape: DescribeRobotOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
