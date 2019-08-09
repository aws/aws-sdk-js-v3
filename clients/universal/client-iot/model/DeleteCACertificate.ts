import { DeleteCACertificateInput } from "./DeleteCACertificateInput";
import { DeleteCACertificateOutput } from "./DeleteCACertificateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateStateException } from "./CertificateStateException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCACertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCACertificate",
  http: {
    method: "DELETE",
    requestUri: "/cacertificate/{caCertificateId}"
  },
  input: {
    shape: DeleteCACertificateInput
  },
  output: {
    shape: DeleteCACertificateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: CertificateStateException
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
