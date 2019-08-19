import { DeregisterRobotInput } from "../shapes/DeregisterRobotInput";
import { DeregisterRobotOutput } from "../shapes/DeregisterRobotOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
