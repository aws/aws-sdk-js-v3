import { UpdateRobotApplicationInput } from "../shapes/UpdateRobotApplicationInput";
import { UpdateRobotApplicationOutput } from "../shapes/UpdateRobotApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRobotApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRobotApplication",
  http: {
    method: "POST",
    requestUri: "/updateRobotApplication"
  },
  input: {
    shape: UpdateRobotApplicationInput
  },
  output: {
    shape: UpdateRobotApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
