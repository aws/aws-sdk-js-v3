import { DeleteProvisioningArtifactInput } from "../shapes/DeleteProvisioningArtifactInput";
import { DeleteProvisioningArtifactOutput } from "../shapes/DeleteProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProvisioningArtifactInput
  },
  output: {
    shape: DeleteProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
