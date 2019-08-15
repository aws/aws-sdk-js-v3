import { CreateRobotApplicationVersionInput } from "../shapes/CreateRobotApplicationVersionInput";
import { CreateRobotApplicationVersionOutput } from "../shapes/CreateRobotApplicationVersionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRobotApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRobotApplicationVersion",
  http: {
    method: "POST",
    requestUri: "/createRobotApplicationVersion"
  },
  input: {
    shape: CreateRobotApplicationVersionInput
  },
  output: {
    shape: CreateRobotApplicationVersionOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: IdempotentParameterMismatchException
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
