import { TransferCertificateInput } from "./TransferCertificateInput";
import { TransferCertificateOutput } from "./TransferCertificateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CertificateStateException } from "./CertificateStateException";
import { TransferConflictException } from "./TransferConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TransferCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TransferCertificate",
  http: {
    method: "PATCH",
    requestUri: "/transfer-certificate/{certificateId}"
  },
  input: {
    shape: TransferCertificateInput
  },
  output: {
    shape: TransferCertificateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: CertificateStateException
    },
    {
      shape: TransferConflictException
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
