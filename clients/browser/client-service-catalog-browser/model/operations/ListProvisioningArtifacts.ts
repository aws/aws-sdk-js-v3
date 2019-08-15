import { ListProvisioningArtifactsInput } from "../shapes/ListProvisioningArtifactsInput";
import { ListProvisioningArtifactsOutput } from "../shapes/ListProvisioningArtifactsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
