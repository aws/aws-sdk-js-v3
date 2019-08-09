import { CreateRobotApplicationInput } from "./CreateRobotApplicationInput";
import { CreateRobotApplicationOutput } from "./CreateRobotApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
