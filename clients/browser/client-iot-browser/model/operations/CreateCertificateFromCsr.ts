import { CreateCertificateFromCsrInput } from "../shapes/CreateCertificateFromCsrInput";
import { CreateCertificateFromCsrOutput } from "../shapes/CreateCertificateFromCsrOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCertificateFromCsr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCertificateFromCsr",
  http: {
    method: "POST",
    requestUri: "/certificates"
  },
  input: {
    shape: CreateCertificateFromCsrInput
  },
  output: {
    shape: CreateCertificateFromCsrOutput
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
