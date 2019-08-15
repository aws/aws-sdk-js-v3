import { CreateCustomKeyStoreInput } from "../shapes/CreateCustomKeyStoreInput";
import { CreateCustomKeyStoreOutput } from "../shapes/CreateCustomKeyStoreOutput";
import { CloudHsmClusterInUseException } from "../shapes/CloudHsmClusterInUseException";
import { CustomKeyStoreNameInUseException } from "../shapes/CustomKeyStoreNameInUseException";
import { CloudHsmClusterNotFoundException } from "../shapes/CloudHsmClusterNotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { CloudHsmClusterNotActiveException } from "../shapes/CloudHsmClusterNotActiveException";
import { IncorrectTrustAnchorException } from "../shapes/IncorrectTrustAnchorException";
import { CloudHsmClusterInvalidConfigurationException } from "../shapes/CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
