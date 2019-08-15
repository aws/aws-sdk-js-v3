import { ListServiceActionsForProvisioningArtifactInput } from "../shapes/ListServiceActionsForProvisioningArtifactInput";
import { ListServiceActionsForProvisioningArtifactOutput } from "../shapes/ListServiceActionsForProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServiceActionsForProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServiceActionsForProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServiceActionsForProvisioningArtifactInput
  },
  output: {
    shape: ListServiceActionsForProvisioningArtifactOutput
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
