import { CreateProvisioningArtifactInput } from "../shapes/CreateProvisioningArtifactInput";
import { CreateProvisioningArtifactOutput } from "../shapes/CreateProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProvisioningArtifactInput
  },
  output: {
    shape: CreateProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    }
  ]
};
