import { ListNamespacesInput } from "./ListNamespacesInput";
import { ListNamespacesOutput } from "./ListNamespacesOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListNamespaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNamespaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListNamespacesInput
  },
  output: {
    shape: ListNamespacesOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
