import { DisconnectCustomKeyStoreInput } from "../shapes/DisconnectCustomKeyStoreInput";
import { DisconnectCustomKeyStoreOutput } from "../shapes/DisconnectCustomKeyStoreOutput";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisconnectCustomKeyStore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisconnectCustomKeyStore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisconnectCustomKeyStoreInput
  },
  output: {
    shape: DisconnectCustomKeyStoreOutput
  },
  errors: [
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
