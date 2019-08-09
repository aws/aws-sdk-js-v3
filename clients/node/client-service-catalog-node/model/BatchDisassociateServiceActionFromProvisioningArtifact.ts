import { BatchDisassociateServiceActionFromProvisioningArtifactInput } from "./BatchDisassociateServiceActionFromProvisioningArtifactInput";
import { BatchDisassociateServiceActionFromProvisioningArtifactOutput } from "./BatchDisassociateServiceActionFromProvisioningArtifactOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDisassociateServiceActionFromProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDisassociateServiceActionFromProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDisassociateServiceActionFromProvisioningArtifactInput
  },
  output: {
    shape: BatchDisassociateServiceActionFromProvisioningArtifactOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
