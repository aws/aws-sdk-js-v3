import { RejectCertificateTransferInput } from "../shapes/RejectCertificateTransferInput";
import { RejectCertificateTransferOutput } from "../shapes/RejectCertificateTransferOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "../shapes/TransferAlreadyCompletedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
