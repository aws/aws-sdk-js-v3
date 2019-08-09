import { UpdateClientCertificateInput } from "./UpdateClientCertificateInput";
import { UpdateClientCertificateOutput } from "./UpdateClientCertificateOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
