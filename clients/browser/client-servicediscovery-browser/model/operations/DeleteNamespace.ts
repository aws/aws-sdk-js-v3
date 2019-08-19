import { DeleteNamespaceInput } from "../shapes/DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "../shapes/DeleteNamespaceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NamespaceNotFound } from "../shapes/NamespaceNotFound";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNamespaceInput
  },
  output: {
    shape: DeleteNamespaceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NamespaceNotFound
    },
    {
      shape: ResourceInUse
    },
    {
      shape: DuplicateRequest
    }
  ]
};
