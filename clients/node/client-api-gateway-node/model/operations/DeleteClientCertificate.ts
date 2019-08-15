import { DeleteClientCertificateInput } from "../shapes/DeleteClientCertificateInput";
import { DeleteClientCertificateOutput } from "../shapes/DeleteClientCertificateOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClientCertificate",
  http: {
    method: "DELETE",
    requestUri: "/clientcertificates/{clientcertificate_id}"
  },
  input: {
    shape: DeleteClientCertificateInput
  },
  output: {
    shape: DeleteClientCertificateOutput
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
