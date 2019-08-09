import { ListCertificatesInput } from "./ListCertificatesInput";
import { ListCertificatesOutput } from "./ListCertificatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
