import { DeleteCertificateInput } from "../shapes/DeleteCertificateInput";
import { DeleteCertificateOutput } from "../shapes/DeleteCertificateOutput";
import { CertificateStateException } from "../shapes/CertificateStateException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCertificate",
  http: {
    method: "DELETE",
    requestUri: "/certificates/{certificateId}"
  },
  input: {
    shape: DeleteCertificateInput
  },
  output: {
    shape: DeleteCertificateOutput
  },
  errors: [
    {
      shape: CertificateStateException
    },
    {
      shape: DeleteConflictException
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
