import { CreateProvisioningArtifactInput } from "./CreateProvisioningArtifactInput";
import { CreateProvisioningArtifactOutput } from "./CreateProvisioningArtifactOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
