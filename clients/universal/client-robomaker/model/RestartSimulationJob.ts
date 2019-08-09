import { RestartSimulationJobInput } from "./RestartSimulationJobInput";
import { RestartSimulationJobOutput } from "./RestartSimulationJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
