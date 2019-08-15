import { DescribeWebsiteCertificateAuthorityInput } from "../shapes/DescribeWebsiteCertificateAuthorityInput";
import { DescribeWebsiteCertificateAuthorityOutput } from "../shapes/DescribeWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWebsiteCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWebsiteCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/describeWebsiteCertificateAuthority"
  },
  input: {
    shape: DescribeWebsiteCertificateAuthorityInput
  },
  output: {
    shape: DescribeWebsiteCertificateAuthorityOutput
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
