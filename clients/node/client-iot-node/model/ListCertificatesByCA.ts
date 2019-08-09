import { ListCertificatesByCAInput } from "./ListCertificatesByCAInput";
import { ListCertificatesByCAOutput } from "./ListCertificatesByCAOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCertificatesByCA: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCertificatesByCA",
  http: {
    method: "GET",
    requestUri: "/certificates-by-ca/{caCertificateId}"
  },
  input: {
    shape: ListCertificatesByCAInput
  },
  output: {
    shape: ListCertificatesByCAOutput
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
