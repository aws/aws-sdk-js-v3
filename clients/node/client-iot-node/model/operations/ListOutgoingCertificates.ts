import { ListOutgoingCertificatesInput } from "../shapes/ListOutgoingCertificatesInput";
import { ListOutgoingCertificatesOutput } from "../shapes/ListOutgoingCertificatesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
