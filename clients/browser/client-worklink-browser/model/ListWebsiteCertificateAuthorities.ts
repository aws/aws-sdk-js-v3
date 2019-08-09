import { ListWebsiteCertificateAuthoritiesInput } from "./ListWebsiteCertificateAuthoritiesInput";
import { ListWebsiteCertificateAuthoritiesOutput } from "./ListWebsiteCertificateAuthoritiesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
