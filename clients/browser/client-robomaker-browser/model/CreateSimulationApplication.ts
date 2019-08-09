import { CreateSimulationApplicationInput } from "./CreateSimulationApplicationInput";
import { CreateSimulationApplicationOutput } from "./CreateSimulationApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
