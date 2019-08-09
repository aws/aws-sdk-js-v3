import { GetNamespaceInput } from "./GetNamespaceInput";
import { GetNamespaceOutput } from "./GetNamespaceOutput";
import { InvalidInput } from "./InvalidInput";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetNamespaceInput
  },
  output: {
    shape: GetNamespaceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NamespaceNotFound
    }
  ]
};
