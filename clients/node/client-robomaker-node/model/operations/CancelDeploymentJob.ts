import { CancelDeploymentJobInput } from "../shapes/CancelDeploymentJobInput";
import { CancelDeploymentJobOutput } from "../shapes/CancelDeploymentJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelDeploymentJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelDeploymentJob",
  http: {
    method: "POST",
    requestUri: "/cancelDeploymentJob"
  },
  input: {
    shape: CancelDeploymentJobInput
  },
  output: {
    shape: CancelDeploymentJobOutput
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
