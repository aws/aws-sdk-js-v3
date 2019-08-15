import { DeleteNamespaceInput } from "../shapes/DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "../shapes/DeleteNamespaceOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
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
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
