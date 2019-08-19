import { ListNamespacesInput } from "../shapes/ListNamespacesInput";
import { ListNamespacesOutput } from "../shapes/ListNamespacesOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
