import { ListProvisioningArtifactsInput } from "./ListProvisioningArtifactsInput";
import { ListProvisioningArtifactsOutput } from "./ListProvisioningArtifactsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListProvisioningArtifacts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProvisioningArtifacts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProvisioningArtifactsInput
  },
  output: {
    shape: ListProvisioningArtifactsOutput
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
