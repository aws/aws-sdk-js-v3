import { CreateRobotInput } from "../shapes/CreateRobotInput";
import { CreateRobotOutput } from "../shapes/CreateRobotOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRobot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRobot",
  http: {
    method: "POST",
    requestUri: "/createRobot"
  },
  input: {
    shape: CreateRobotInput
  },
  output: {
    shape: CreateRobotOutput
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
      shape: ResourceAlreadyExistsException
    }
  ]
};
