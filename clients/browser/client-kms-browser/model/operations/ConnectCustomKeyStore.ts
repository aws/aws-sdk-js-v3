import { ConnectCustomKeyStoreInput } from "../shapes/ConnectCustomKeyStoreInput";
import { ConnectCustomKeyStoreOutput } from "../shapes/ConnectCustomKeyStoreOutput";
import { CloudHsmClusterNotActiveException } from "../shapes/CloudHsmClusterNotActiveException";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { CloudHsmClusterInvalidConfigurationException } from "../shapes/CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
