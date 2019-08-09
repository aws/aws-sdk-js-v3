import { UpdateCACertificateInput } from "./UpdateCACertificateInput";
import { UpdateCACertificateOutput } from "./UpdateCACertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
