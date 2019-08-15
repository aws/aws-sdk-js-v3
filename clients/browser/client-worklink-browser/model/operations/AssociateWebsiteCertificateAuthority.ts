import { AssociateWebsiteCertificateAuthorityInput } from "../shapes/AssociateWebsiteCertificateAuthorityInput";
import { AssociateWebsiteCertificateAuthorityOutput } from "../shapes/AssociateWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateWebsiteCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateWebsiteCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/associateWebsiteCertificateAuthority"
  },
  input: {
    shape: AssociateWebsiteCertificateAuthorityInput
  },
  output: {
    shape: AssociateWebsiteCertificateAuthorityOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
