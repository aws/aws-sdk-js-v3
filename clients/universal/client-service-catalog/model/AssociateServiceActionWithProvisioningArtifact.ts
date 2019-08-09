import { AssociateServiceActionWithProvisioningArtifactInput } from "./AssociateServiceActionWithProvisioningArtifactInput";
import { AssociateServiceActionWithProvisioningArtifactOutput } from "./AssociateServiceActionWithProvisioningArtifactOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
