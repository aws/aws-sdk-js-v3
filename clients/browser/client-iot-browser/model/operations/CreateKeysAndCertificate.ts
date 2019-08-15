import { CreateKeysAndCertificateInput } from "../shapes/CreateKeysAndCertificateInput";
import { CreateKeysAndCertificateOutput } from "../shapes/CreateKeysAndCertificateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
