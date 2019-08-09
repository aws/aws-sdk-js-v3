import { CreateSimulationJobInput } from "./CreateSimulationJobInput";
import { CreateSimulationJobOutput } from "./CreateSimulationJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
