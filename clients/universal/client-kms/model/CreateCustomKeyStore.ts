import { CreateCustomKeyStoreInput } from "./CreateCustomKeyStoreInput";
import { CreateCustomKeyStoreOutput } from "./CreateCustomKeyStoreOutput";
import { CloudHsmClusterInUseException } from "./CloudHsmClusterInUseException";
import { CustomKeyStoreNameInUseException } from "./CustomKeyStoreNameInUseException";
import { CloudHsmClusterNotFoundException } from "./CloudHsmClusterNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { IncorrectTrustAnchorException } from "./IncorrectTrustAnchorException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCustomKeyStore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCustomKeyStore",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCustomKeyStoreInput
  },
  output: {
    shape: CreateCustomKeyStoreOutput
  },
  errors: [
    {
      shape: CloudHsmClusterInUseException
    },
    {
      shape: CustomKeyStoreNameInUseException
    },
    {
      shape: CloudHsmClusterNotFoundException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: CloudHsmClusterNotActiveException
    },
    {
      shape: IncorrectTrustAnchorException
    },
    {
      shape: CloudHsmClusterInvalidConfigurationException
    }
  ]
};
