import { DescribeCertificateInput } from "../shapes/DescribeCertificateInput";
import { DescribeCertificateOutput } from "../shapes/DescribeCertificateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCertificate",
  http: {
    method: "GET",
    requestUri: "/certificates/{certificateId}"
  },
  input: {
    shape: DescribeCertificateInput
  },
  output: {
    shape: DescribeCertificateOutput
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
