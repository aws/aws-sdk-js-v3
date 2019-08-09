import { DeleteCustomKeyStoreInput } from "./DeleteCustomKeyStoreInput";
import { DeleteCustomKeyStoreOutput } from "./DeleteCustomKeyStoreOutput";
import { CustomKeyStoreHasCMKsException } from "./CustomKeyStoreHasCMKsException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCustomKeyStore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCustomKeyStore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCustomKeyStoreInput
  },
  output: {
    shape: DeleteCustomKeyStoreOutput
  },
  errors: [
    {
      shape: CustomKeyStoreHasCMKsException
    },
    {
      shape: CustomKeyStoreInvalidStateException
    },
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: KMSInternalException
    }
  ]
};
