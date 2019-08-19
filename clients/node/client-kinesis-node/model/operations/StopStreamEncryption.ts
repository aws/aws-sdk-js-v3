import { StopStreamEncryptionInput } from "../shapes/StopStreamEncryptionInput";
import { StopStreamEncryptionOutput } from "../shapes/StopStreamEncryptionOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopStreamEncryption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopStreamEncryption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopStreamEncryptionInput
  },
  output: {
    shape: StopStreamEncryptionOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
