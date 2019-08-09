import { CreateCertificateFromCsrInput } from "./CreateCertificateFromCsrInput";
import { CreateCertificateFromCsrOutput } from "./CreateCertificateFromCsrOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
