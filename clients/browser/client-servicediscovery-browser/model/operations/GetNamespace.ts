import { GetNamespaceInput } from "../shapes/GetNamespaceInput";
import { GetNamespaceOutput } from "../shapes/GetNamespaceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NamespaceNotFound } from "../shapes/NamespaceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
