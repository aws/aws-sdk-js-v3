import { DisconnectCustomKeyStoreInput } from "./DisconnectCustomKeyStoreInput";
import { DisconnectCustomKeyStoreOutput } from "./DisconnectCustomKeyStoreOutput";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
