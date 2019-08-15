import { RegisterRobotInput } from "../shapes/RegisterRobotInput";
import { RegisterRobotOutput } from "../shapes/RegisterRobotOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterRobot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterRobot",
  http: {
    method: "POST",
    requestUri: "/registerRobot"
  },
  input: {
    shape: RegisterRobotInput
  },
  output: {
    shape: RegisterRobotOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
