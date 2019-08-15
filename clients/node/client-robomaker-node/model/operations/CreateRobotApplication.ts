import { CreateRobotApplicationInput } from "../shapes/CreateRobotApplicationInput";
import { CreateRobotApplicationOutput } from "../shapes/CreateRobotApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRobotApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRobotApplication",
  http: {
    method: "POST",
    requestUri: "/createRobotApplication"
  },
  input: {
    shape: CreateRobotApplicationInput
  },
  output: {
    shape: CreateRobotApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    },
    {
      shape: IdempotentParameterMismatchException
    }
  ]
};
