import { DeleteNamespaceInput } from "./DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "./DeleteNamespaceOutput";
import { InvalidInput } from "./InvalidInput";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { ResourceInUse } from "./ResourceInUse";
import { DuplicateRequest } from "./DuplicateRequest";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
