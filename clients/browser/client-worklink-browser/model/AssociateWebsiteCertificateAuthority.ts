import { AssociateWebsiteCertificateAuthorityInput } from "./AssociateWebsiteCertificateAuthorityInput";
import { AssociateWebsiteCertificateAuthorityOutput } from "./AssociateWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
