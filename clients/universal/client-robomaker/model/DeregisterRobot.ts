import { DeregisterRobotInput } from "./DeregisterRobotInput";
import { DeregisterRobotOutput } from "./DeregisterRobotOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterRobot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterRobot",
  http: {
    method: "POST",
    requestUri: "/deregisterRobot"
  },
  input: {
    shape: DeregisterRobotInput
  },
  output: {
    shape: DeregisterRobotOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
