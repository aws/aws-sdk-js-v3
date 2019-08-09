import { CreateSimulationApplicationVersionInput } from "./CreateSimulationApplicationVersionInput";
import { CreateSimulationApplicationVersionOutput } from "./CreateSimulationApplicationVersionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSimulationApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSimulationApplicationVersion",
  http: {
    method: "POST",
    requestUri: "/createSimulationApplicationVersion"
  },
  input: {
    shape: CreateSimulationApplicationVersionInput
  },
  output: {
    shape: CreateSimulationApplicationVersionOutput
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
