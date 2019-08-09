import { CreateKeysAndCertificateInput } from "./CreateKeysAndCertificateInput";
import { CreateKeysAndCertificateOutput } from "./CreateKeysAndCertificateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateKeysAndCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateKeysAndCertificate",
  http: {
    method: "POST",
    requestUri: "/keys-and-certificate"
  },
  input: {
    shape: CreateKeysAndCertificateInput
  },
  output: {
    shape: CreateKeysAndCertificateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
