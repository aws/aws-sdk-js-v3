import { ReEncryptInput } from "../shapes/ReEncryptInput";
import { ReEncryptOutput } from "../shapes/ReEncryptOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DisabledException } from "../shapes/DisabledException";
import { InvalidCiphertextException } from "../shapes/InvalidCiphertextException";
import { KeyUnavailableException } from "../shapes/KeyUnavailableException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidKeyUsageException } from "../shapes/InvalidKeyUsageException";
import { InvalidGrantTokenException } from "../shapes/InvalidGrantTokenException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReEncrypt: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReEncrypt",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReEncryptInput
  },
  output: {
    shape: ReEncryptOutput
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
