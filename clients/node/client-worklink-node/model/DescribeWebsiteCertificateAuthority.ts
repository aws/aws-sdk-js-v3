import { DescribeWebsiteCertificateAuthorityInput } from "./DescribeWebsiteCertificateAuthorityInput";
import { DescribeWebsiteCertificateAuthorityOutput } from "./DescribeWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
