import { CreatePrivateDnsNamespaceInput } from "./CreatePrivateDnsNamespaceInput";
import { CreatePrivateDnsNamespaceOutput } from "./CreatePrivateDnsNamespaceOutput";
import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
