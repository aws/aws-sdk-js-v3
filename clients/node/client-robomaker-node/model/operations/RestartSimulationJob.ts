import { RestartSimulationJobInput } from "../shapes/RestartSimulationJobInput";
import { RestartSimulationJobOutput } from "../shapes/RestartSimulationJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestartSimulationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestartSimulationJob",
  http: {
    method: "POST",
    requestUri: "/restartSimulationJob"
  },
  input: {
    shape: RestartSimulationJobInput
  },
  output: {
    shape: RestartSimulationJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    }
  ]
};
