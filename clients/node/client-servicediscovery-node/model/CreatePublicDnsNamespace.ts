import { CreatePublicDnsNamespaceInput } from "./CreatePublicDnsNamespaceInput";
import { CreatePublicDnsNamespaceOutput } from "./CreatePublicDnsNamespaceOutput";
import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
