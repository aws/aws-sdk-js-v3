import { ListServiceActionsForProvisioningArtifactInput } from "./ListServiceActionsForProvisioningArtifactInput";
import { ListServiceActionsForProvisioningArtifactOutput } from "./ListServiceActionsForProvisioningArtifactOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
