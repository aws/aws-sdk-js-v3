import { DeleteCustomKeyStoreInput } from "../shapes/DeleteCustomKeyStoreInput";
import { DeleteCustomKeyStoreOutput } from "../shapes/DeleteCustomKeyStoreOutput";
import { CustomKeyStoreHasCMKsException } from "../shapes/CustomKeyStoreHasCMKsException";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
