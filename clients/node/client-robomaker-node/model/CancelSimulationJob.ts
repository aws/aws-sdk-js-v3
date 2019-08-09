import { CancelSimulationJobInput } from "./CancelSimulationJobInput";
import { CancelSimulationJobOutput } from "./CancelSimulationJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelSimulationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSimulationJob",
  http: {
    method: "POST",
    requestUri: "/cancelSimulationJob"
  },
  input: {
    shape: CancelSimulationJobInput
  },
  output: {
    shape: CancelSimulationJobOutput
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
    }
  ]
};
