import { TransferCertificateInput } from "../shapes/TransferCertificateInput";
import { TransferCertificateOutput } from "../shapes/TransferCertificateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { CertificateStateException } from "../shapes/CertificateStateException";
import { TransferConflictException } from "../shapes/TransferConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
