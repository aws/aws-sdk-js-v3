import { ListOutgoingCertificatesInput } from "./ListOutgoingCertificatesInput";
import { ListOutgoingCertificatesOutput } from "./ListOutgoingCertificatesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListOutgoingCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOutgoingCertificates",
  http: {
    method: "GET",
    requestUri: "/certificates-out-going"
  },
  input: {
    shape: ListOutgoingCertificatesInput
  },
  output: {
    shape: ListOutgoingCertificatesOutput
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
