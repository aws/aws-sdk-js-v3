import { ListCACertificatesInput } from "./ListCACertificatesInput";
import { ListCACertificatesOutput } from "./ListCACertificatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
