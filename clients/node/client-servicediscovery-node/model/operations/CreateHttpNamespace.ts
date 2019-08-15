import { CreateHttpNamespaceInput } from "../shapes/CreateHttpNamespaceInput";
import { CreateHttpNamespaceOutput } from "../shapes/CreateHttpNamespaceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NamespaceAlreadyExists } from "../shapes/NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
