import { UpdateCustomKeyStoreInput } from "./UpdateCustomKeyStoreInput";
import { UpdateCustomKeyStoreOutput } from "./UpdateCustomKeyStoreOutput";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { CloudHsmClusterNotFoundException } from "./CloudHsmClusterNotFoundException";
import { CloudHsmClusterNotRelatedException } from "./CloudHsmClusterNotRelatedException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCustomKeyStore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCustomKeyStore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCustomKeyStoreInput
  },
  output: {
    shape: UpdateCustomKeyStoreOutput
  },
  errors: [
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: CloudHsmClusterNotFoundException
    },
    {
      shape: CloudHsmClusterNotRelatedException
    },
    {
      shape: CustomKeyStoreInvalidStateException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: CloudHsmClusterNotActiveException
    },
    {
      shape: CloudHsmClusterInvalidConfigurationException
    }
  ]
};
