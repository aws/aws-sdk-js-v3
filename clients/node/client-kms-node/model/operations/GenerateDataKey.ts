import { GenerateDataKeyInput } from "../shapes/GenerateDataKeyInput";
import { GenerateDataKeyOutput } from "../shapes/GenerateDataKeyOutput";
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

export const GenerateDataKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateDataKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateDataKeyInput
  },
  output: {
    shape: GenerateDataKeyOutput
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
