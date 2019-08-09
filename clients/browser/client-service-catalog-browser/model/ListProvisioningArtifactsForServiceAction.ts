import { ListProvisioningArtifactsForServiceActionInput } from "./ListProvisioningArtifactsForServiceActionInput";
import { ListProvisioningArtifactsForServiceActionOutput } from "./ListProvisioningArtifactsForServiceActionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListProvisioningArtifactsForServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProvisioningArtifactsForServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProvisioningArtifactsForServiceActionInput
  },
  output: {
    shape: ListProvisioningArtifactsForServiceActionOutput
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
