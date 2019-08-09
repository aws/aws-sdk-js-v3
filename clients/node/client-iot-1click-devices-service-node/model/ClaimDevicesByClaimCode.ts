import { ClaimDevicesByClaimCodeInput } from "./ClaimDevicesByClaimCodeInput";
import { ClaimDevicesByClaimCodeOutput } from "./ClaimDevicesByClaimCodeOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ClaimDevicesByClaimCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ClaimDevicesByClaimCode",
  http: {
    method: "PUT",
    requestUri: "/claims/{claimCode}"
  },
  input: {
    shape: ClaimDevicesByClaimCodeInput
  },
  output: {
    shape: ClaimDevicesByClaimCodeOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ForbiddenException
    }
  ]
};
