import { CreateRobotInput } from "./CreateRobotInput";
import { CreateRobotOutput } from "./CreateRobotOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
