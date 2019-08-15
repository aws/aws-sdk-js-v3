import { ListCertificatesByCAInput } from "../shapes/ListCertificatesByCAInput";
import { ListCertificatesByCAOutput } from "../shapes/ListCertificatesByCAOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
