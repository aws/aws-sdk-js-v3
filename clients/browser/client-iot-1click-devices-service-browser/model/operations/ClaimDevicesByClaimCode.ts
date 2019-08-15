import { ClaimDevicesByClaimCodeInput } from "../shapes/ClaimDevicesByClaimCodeInput";
import { ClaimDevicesByClaimCodeOutput } from "../shapes/ClaimDevicesByClaimCodeOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
