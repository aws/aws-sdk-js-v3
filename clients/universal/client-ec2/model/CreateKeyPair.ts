import { CreateKeyPairInput } from "./CreateKeyPairInput";
import { CreateKeyPairOutput } from "./CreateKeyPairOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateKeyPair: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateKeyPair",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateKeyPairInput
  },
  output: {
    shape: CreateKeyPairOutput
  },
  errors: []
};
