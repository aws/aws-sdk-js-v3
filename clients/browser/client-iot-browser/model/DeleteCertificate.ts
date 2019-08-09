import { DeleteCertificateInput } from "./DeleteCertificateInput";
import { DeleteCertificateOutput } from "./DeleteCertificateOutput";
import { CertificateStateException } from "./CertificateStateException";
import { DeleteConflictException } from "./DeleteConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
