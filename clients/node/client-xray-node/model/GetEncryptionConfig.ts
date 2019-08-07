import { GetEncryptionConfigInput } from "./GetEncryptionConfigInput";
import { GetEncryptionConfigOutput } from "./GetEncryptionConfigOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEncryptionConfig",
  http: {
    method: "POST",
    requestUri: "/EncryptionConfig"
  },
  input: {
    shape: GetEncryptionConfigInput
  },
  output: {
    shape: GetEncryptionConfigOutput
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
