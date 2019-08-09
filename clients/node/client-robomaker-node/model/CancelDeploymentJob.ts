import { CancelDeploymentJobInput } from "./CancelDeploymentJobInput";
import { CancelDeploymentJobOutput } from "./CancelDeploymentJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
