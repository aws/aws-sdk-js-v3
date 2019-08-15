import { CancelCertificateTransferInput } from "../shapes/CancelCertificateTransferInput";
import { CancelCertificateTransferOutput } from "../shapes/CancelCertificateTransferOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "../shapes/TransferAlreadyCompletedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelCertificateTransfer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelCertificateTransfer",
  http: {
    method: "PATCH",
    requestUri: "/cancel-certificate-transfer/{certificateId}"
  },
  input: {
    shape: CancelCertificateTransferInput
  },
  output: {
    shape: CancelCertificateTransferOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TransferAlreadyCompletedException
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
