import { CreateHttpNamespaceInput } from "./CreateHttpNamespaceInput";
import { CreateHttpNamespaceOutput } from "./CreateHttpNamespaceOutput";
import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateHttpNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHttpNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHttpNamespaceInput
  },
  output: {
    shape: CreateHttpNamespaceOutput
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
