import { DescribeCACertificateInput } from "../shapes/DescribeCACertificateInput";
import { DescribeCACertificateOutput } from "../shapes/DescribeCACertificateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCACertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCACertificate",
  http: {
    method: "GET",
    requestUri: "/cacertificate/{caCertificateId}"
  },
  input: {
    shape: DescribeCACertificateInput
  },
  output: {
    shape: DescribeCACertificateOutput
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
