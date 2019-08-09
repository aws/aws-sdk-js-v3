import { CreateServiceInput } from "./CreateServiceInput";
import { CreateServiceOutput } from "./CreateServiceOutput";
import { InvalidInput } from "./InvalidInput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { ServiceAlreadyExists } from "./ServiceAlreadyExists";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
