import { CancelSimulationJobInput } from "../shapes/CancelSimulationJobInput";
import { CancelSimulationJobOutput } from "../shapes/CancelSimulationJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
