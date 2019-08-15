import { CreatePrivateDnsNamespaceInput } from "../shapes/CreatePrivateDnsNamespaceInput";
import { CreatePrivateDnsNamespaceOutput } from "../shapes/CreatePrivateDnsNamespaceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NamespaceAlreadyExists } from "../shapes/NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePrivateDnsNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePrivateDnsNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePrivateDnsNamespaceInput
  },
  output: {
    shape: CreatePrivateDnsNamespaceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NamespaceAlreadyExists
    },
    {
      shape: ResourceLimitExceeded
    },
    {
      shape: DuplicateRequest
    }
  ]
};
