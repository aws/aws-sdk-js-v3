import { DeleteKeyPairInput } from "../shapes/DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "../shapes/DeleteKeyPairOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteKeyPair: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteKeyPair",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteKeyPairInput
  },
  output: {
    shape: DeleteKeyPairOutput
  },
  errors: []
};
