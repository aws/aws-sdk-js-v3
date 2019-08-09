import { CreateRobotApplicationVersionInput } from "./CreateRobotApplicationVersionInput";
import { CreateRobotApplicationVersionOutput } from "./CreateRobotApplicationVersionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
