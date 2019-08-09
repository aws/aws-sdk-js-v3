import { UpdateRobotApplicationInput } from "./UpdateRobotApplicationInput";
import { UpdateRobotApplicationOutput } from "./UpdateRobotApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
