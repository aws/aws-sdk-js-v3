import { CreateServiceInput } from "../shapes/CreateServiceInput";
import { CreateServiceOutput } from "../shapes/CreateServiceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { NamespaceNotFound } from "../shapes/NamespaceNotFound";
import { ServiceAlreadyExists } from "../shapes/ServiceAlreadyExists";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServiceInput
  },
  output: {
    shape: CreateServiceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: ResourceLimitExceeded
    },
    {
      shape: NamespaceNotFound
    },
    {
      shape: ServiceAlreadyExists
    }
  ]
};
