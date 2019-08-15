import { UpdateCustomKeyStoreInput } from "../shapes/UpdateCustomKeyStoreInput";
import { UpdateCustomKeyStoreOutput } from "../shapes/UpdateCustomKeyStoreOutput";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { CloudHsmClusterNotFoundException } from "../shapes/CloudHsmClusterNotFoundException";
import { CloudHsmClusterNotRelatedException } from "../shapes/CloudHsmClusterNotRelatedException";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { CloudHsmClusterNotActiveException } from "../shapes/CloudHsmClusterNotActiveException";
import { CloudHsmClusterInvalidConfigurationException } from "../shapes/CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
