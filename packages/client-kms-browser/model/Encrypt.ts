import { EncryptInput } from "./EncryptInput";
import { EncryptOutput } from "./EncryptOutput";
import { NotFoundException } from "./NotFoundException";
import { DisabledException } from "./DisabledException";
import { KeyUnavailableException } from "./KeyUnavailableException";
import { DependencyTimeoutException } from "./DependencyTimeoutException";
import { InvalidKeyUsageException } from "./InvalidKeyUsageException";
import { InvalidGrantTokenException } from "./InvalidGrantTokenException";
import { KMSInternalException } from "./KMSInternalException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
