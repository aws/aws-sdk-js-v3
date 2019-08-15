import { GenerateRandomInput } from "../shapes/GenerateRandomInput";
import { GenerateRandomOutput } from "../shapes/GenerateRandomOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GenerateRandom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateRandom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateRandomInput
  },
  output: {
    shape: GenerateRandomOutput
  },
  errors: [
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: CustomKeyStoreInvalidStateException
    }
  ]
};
