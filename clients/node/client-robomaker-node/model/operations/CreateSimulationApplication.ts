import { CreateSimulationApplicationInput } from "../shapes/CreateSimulationApplicationInput";
import { CreateSimulationApplicationOutput } from "../shapes/CreateSimulationApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSimulationApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSimulationApplication",
  http: {
    method: "POST",
    requestUri: "/createSimulationApplication"
  },
  input: {
    shape: CreateSimulationApplicationInput
  },
  output: {
    shape: CreateSimulationApplicationOutput
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
