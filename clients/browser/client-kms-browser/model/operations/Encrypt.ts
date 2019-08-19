import { EncryptInput } from "../shapes/EncryptInput";
import { EncryptOutput } from "../shapes/EncryptOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DisabledException } from "../shapes/DisabledException";
import { KeyUnavailableException } from "../shapes/KeyUnavailableException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidKeyUsageException } from "../shapes/InvalidKeyUsageException";
import { InvalidGrantTokenException } from "../shapes/InvalidGrantTokenException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Encrypt: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Encrypt",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EncryptInput
  },
  output: {
    shape: EncryptOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DisabledException
    },
    {
      shape: KeyUnavailableException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidKeyUsageException
    },
    {
      shape: InvalidGrantTokenException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
