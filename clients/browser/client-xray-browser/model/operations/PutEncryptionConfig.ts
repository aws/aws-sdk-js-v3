import { PutEncryptionConfigInput } from "../shapes/PutEncryptionConfigInput";
import { PutEncryptionConfigOutput } from "../shapes/PutEncryptionConfigOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEncryptionConfig",
  http: {
    method: "POST",
    requestUri: "/PutEncryptionConfig"
  },
  input: {
    shape: PutEncryptionConfigInput
  },
  output: {
    shape: PutEncryptionConfigOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
