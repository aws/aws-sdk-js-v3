import { CreatePublicDnsNamespaceInput } from "../shapes/CreatePublicDnsNamespaceInput";
import { CreatePublicDnsNamespaceOutput } from "../shapes/CreatePublicDnsNamespaceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NamespaceAlreadyExists } from "../shapes/NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePublicDnsNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePublicDnsNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePublicDnsNamespaceInput
  },
  output: {
    shape: CreatePublicDnsNamespaceOutput
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
