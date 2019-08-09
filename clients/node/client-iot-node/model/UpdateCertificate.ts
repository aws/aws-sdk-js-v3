import { UpdateCertificateInput } from "./UpdateCertificateInput";
import { UpdateCertificateOutput } from "./UpdateCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CertificateStateException } from "./CertificateStateException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCertificate",
  http: {
    method: "PUT",
    requestUri: "/certificates/{certificateId}"
  },
  input: {
    shape: UpdateCertificateInput
  },
  output: {
    shape: UpdateCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: CertificateStateException
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
