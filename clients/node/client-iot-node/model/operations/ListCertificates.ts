import { ListCertificatesInput } from "../shapes/ListCertificatesInput";
import { ListCertificatesOutput } from "../shapes/ListCertificatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCertificates",
  http: {
    method: "GET",
    requestUri: "/certificates"
  },
  input: {
    shape: ListCertificatesInput
  },
  output: {
    shape: ListCertificatesOutput
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
    }
  ]
};
