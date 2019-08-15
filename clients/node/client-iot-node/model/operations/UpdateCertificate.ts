import { UpdateCertificateInput } from "../shapes/UpdateCertificateInput";
import { UpdateCertificateOutput } from "../shapes/UpdateCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { CertificateStateException } from "../shapes/CertificateStateException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
