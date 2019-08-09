import { RejectCertificateTransferInput } from "./RejectCertificateTransferInput";
import { RejectCertificateTransferOutput } from "./RejectCertificateTransferOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "./TransferAlreadyCompletedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectCertificateTransfer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectCertificateTransfer",
  http: {
    method: "PATCH",
    requestUri: "/reject-certificate-transfer/{certificateId}"
  },
  input: {
    shape: RejectCertificateTransferInput
  },
  output: {
    shape: RejectCertificateTransferOutput
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
