import { ConnectCustomKeyStoreInput } from "./ConnectCustomKeyStoreInput";
import { ConnectCustomKeyStoreOutput } from "./ConnectCustomKeyStoreOutput";
import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConnectCustomKeyStore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConnectCustomKeyStore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConnectCustomKeyStoreInput
  },
  output: {
    shape: ConnectCustomKeyStoreOutput
  },
  errors: [
    {
      shape: CloudHsmClusterNotActiveException
    },
    {
      shape: CustomKeyStoreInvalidStateException
    },
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: CloudHsmClusterInvalidConfigurationException
    }
  ]
};
