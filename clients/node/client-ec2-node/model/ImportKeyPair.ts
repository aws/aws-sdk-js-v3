import { ImportKeyPairInput } from "./ImportKeyPairInput";
import { ImportKeyPairOutput } from "./ImportKeyPairOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportKeyPair: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportKeyPair",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportKeyPairInput
  },
  output: {
    shape: ImportKeyPairOutput
  },
  errors: []
};
