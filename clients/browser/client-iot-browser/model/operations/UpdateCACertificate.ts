import { UpdateCACertificateInput } from "../shapes/UpdateCACertificateInput";
import { UpdateCACertificateOutput } from "../shapes/UpdateCACertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCACertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCACertificate",
  http: {
    method: "PUT",
    requestUri: "/cacertificate/{caCertificateId}"
  },
  input: {
    shape: UpdateCACertificateInput
  },
  output: {
    shape: UpdateCACertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
