import { AssociateServiceActionWithProvisioningArtifactInput } from "../shapes/AssociateServiceActionWithProvisioningArtifactInput";
import { AssociateServiceActionWithProvisioningArtifactOutput } from "../shapes/AssociateServiceActionWithProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateServiceActionWithProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateServiceActionWithProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateServiceActionWithProvisioningArtifactInput
  },
  output: {
    shape: AssociateServiceActionWithProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DuplicateResourceException
    },
    {
      shape: LimitExceededException
    }
  ]
};
