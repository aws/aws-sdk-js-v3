import { CreateSimulationApplicationVersionInput } from "../shapes/CreateSimulationApplicationVersionInput";
import { CreateSimulationApplicationVersionOutput } from "../shapes/CreateSimulationApplicationVersionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
