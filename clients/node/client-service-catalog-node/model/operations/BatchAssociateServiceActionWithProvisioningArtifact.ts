import { BatchAssociateServiceActionWithProvisioningArtifactInput } from "../shapes/BatchAssociateServiceActionWithProvisioningArtifactInput";
import { BatchAssociateServiceActionWithProvisioningArtifactOutput } from "../shapes/BatchAssociateServiceActionWithProvisioningArtifactOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
