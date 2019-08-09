import { DescribeCACertificateInput } from "./DescribeCACertificateInput";
import { DescribeCACertificateOutput } from "./DescribeCACertificateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
