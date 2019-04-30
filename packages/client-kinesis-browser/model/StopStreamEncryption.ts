import { StopStreamEncryptionInput } from "./StopStreamEncryptionInput";
import { StopStreamEncryptionOutput } from "./StopStreamEncryptionOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
