import { AcceptCertificateTransferInput } from "./AcceptCertificateTransferInput";
import { AcceptCertificateTransferOutput } from "./AcceptCertificateTransferOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "./TransferAlreadyCompletedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptCertificateTransfer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptCertificateTransfer",
  http: {
    method: "PATCH",
    requestUri: "/accept-certificate-transfer/{certificateId}"
  },
  input: {
    shape: AcceptCertificateTransferInput
  },
  output: {
    shape: AcceptCertificateTransferOutput
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
