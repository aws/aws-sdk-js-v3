import { CancelCertificateTransferInput } from "./CancelCertificateTransferInput";
import { CancelCertificateTransferOutput } from "./CancelCertificateTransferOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "./TransferAlreadyCompletedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
