import { DeleteClientCertificateInput } from "./DeleteClientCertificateInput";
import { DeleteClientCertificateOutput } from "./DeleteClientCertificateOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
