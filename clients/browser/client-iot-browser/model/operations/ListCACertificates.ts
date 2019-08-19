import { ListCACertificatesInput } from "../shapes/ListCACertificatesInput";
import { ListCACertificatesOutput } from "../shapes/ListCACertificatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCACertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCACertificates",
  http: {
    method: "GET",
    requestUri: "/cacertificates"
  },
  input: {
    shape: ListCACertificatesInput
  },
  output: {
    shape: ListCACertificatesOutput
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
