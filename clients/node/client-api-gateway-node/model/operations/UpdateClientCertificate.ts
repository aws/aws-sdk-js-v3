import { UpdateClientCertificateInput } from "../shapes/UpdateClientCertificateInput";
import { UpdateClientCertificateOutput } from "../shapes/UpdateClientCertificateOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateClientCertificate",
  http: {
    method: "PATCH",
    requestUri: "/clientcertificates/{clientcertificate_id}"
  },
  input: {
    shape: UpdateClientCertificateInput
  },
  output: {
    shape: UpdateClientCertificateOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
