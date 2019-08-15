import { DeleteCACertificateInput } from "../shapes/DeleteCACertificateInput";
import { DeleteCACertificateOutput } from "../shapes/DeleteCACertificateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { CertificateStateException } from "../shapes/CertificateStateException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
