import { DeleteProvisioningArtifactInput } from "./DeleteProvisioningArtifactInput";
import { DeleteProvisioningArtifactOutput } from "./DeleteProvisioningArtifactOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
