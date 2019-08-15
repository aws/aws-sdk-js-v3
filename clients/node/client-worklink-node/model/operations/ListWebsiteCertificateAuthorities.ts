import { ListWebsiteCertificateAuthoritiesInput } from "../shapes/ListWebsiteCertificateAuthoritiesInput";
import { ListWebsiteCertificateAuthoritiesOutput } from "../shapes/ListWebsiteCertificateAuthoritiesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWebsiteCertificateAuthorities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWebsiteCertificateAuthorities",
  http: {
    method: "POST",
    requestUri: "/listWebsiteCertificateAuthorities"
  },
  input: {
    shape: ListWebsiteCertificateAuthoritiesInput
  },
  output: {
    shape: ListWebsiteCertificateAuthoritiesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
