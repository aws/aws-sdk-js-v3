import { BatchAssociateServiceActionWithProvisioningArtifactInput } from "./BatchAssociateServiceActionWithProvisioningArtifactInput";
import { BatchAssociateServiceActionWithProvisioningArtifactOutput } from "./BatchAssociateServiceActionWithProvisioningArtifactOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchAssociateServiceActionWithProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchAssociateServiceActionWithProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchAssociateServiceActionWithProvisioningArtifactInput
  },
  output: {
    shape: BatchAssociateServiceActionWithProvisioningArtifactOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
