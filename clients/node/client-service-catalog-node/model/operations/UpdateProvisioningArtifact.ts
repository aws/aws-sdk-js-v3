import { UpdateProvisioningArtifactInput } from "../shapes/UpdateProvisioningArtifactInput";
import { UpdateProvisioningArtifactOutput } from "../shapes/UpdateProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProvisioningArtifactInput
  },
  output: {
    shape: UpdateProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
