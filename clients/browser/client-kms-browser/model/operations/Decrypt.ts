import { DecryptInput } from "../shapes/DecryptInput";
import { DecryptOutput } from "../shapes/DecryptOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DisabledException } from "../shapes/DisabledException";
import { InvalidCiphertextException } from "../shapes/InvalidCiphertextException";
import { KeyUnavailableException } from "../shapes/KeyUnavailableException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidGrantTokenException } from "../shapes/InvalidGrantTokenException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Decrypt: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Decrypt",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DecryptInput
  },
  output: {
    shape: DecryptOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DisabledException
    },
    {
      shape: InvalidCiphertextException
    },
    {
      shape: KeyUnavailableException
    },
    {
      shape: DependencyTimeoutException
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
