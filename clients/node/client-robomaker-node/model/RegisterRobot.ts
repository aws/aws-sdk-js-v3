import { RegisterRobotInput } from "./RegisterRobotInput";
import { RegisterRobotOutput } from "./RegisterRobotOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
