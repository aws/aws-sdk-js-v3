import { DisassociateServiceActionFromProvisioningArtifactInput } from "../shapes/DisassociateServiceActionFromProvisioningArtifactInput";
import { DisassociateServiceActionFromProvisioningArtifactOutput } from "../shapes/DisassociateServiceActionFromProvisioningArtifactOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateServiceActionFromProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateServiceActionFromProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateServiceActionFromProvisioningArtifactInput
  },
  output: {
    shape: DisassociateServiceActionFromProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
