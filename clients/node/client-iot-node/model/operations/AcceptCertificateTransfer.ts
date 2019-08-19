import { AcceptCertificateTransferInput } from "../shapes/AcceptCertificateTransferInput";
import { AcceptCertificateTransferOutput } from "../shapes/AcceptCertificateTransferOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TransferAlreadyCompletedException } from "../shapes/TransferAlreadyCompletedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
