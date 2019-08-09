import { DisassociateWebsiteCertificateAuthorityInput } from "./DisassociateWebsiteCertificateAuthorityInput";
import { DisassociateWebsiteCertificateAuthorityOutput } from "./DisassociateWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateWebsiteCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateWebsiteCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/disassociateWebsiteCertificateAuthority"
  },
  input: {
    shape: DisassociateWebsiteCertificateAuthorityInput
  },
  output: {
    shape: DisassociateWebsiteCertificateAuthorityOutput
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
      shape: TooManyRequestsException
    }
  ]
};
