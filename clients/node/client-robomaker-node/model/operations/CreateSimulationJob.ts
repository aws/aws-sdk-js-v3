import { CreateSimulationJobInput } from "../shapes/CreateSimulationJobInput";
import { CreateSimulationJobOutput } from "../shapes/CreateSimulationJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSimulationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSimulationJob",
  http: {
    method: "POST",
    requestUri: "/createSimulationJob"
  },
  input: {
    shape: CreateSimulationJobInput
  },
  output: {
    shape: CreateSimulationJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
