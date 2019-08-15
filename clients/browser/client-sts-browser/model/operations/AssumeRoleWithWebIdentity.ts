import { AssumeRoleWithWebIdentityInput } from "../shapes/AssumeRoleWithWebIdentityInput";
import { AssumeRoleWithWebIdentityOutput } from "../shapes/AssumeRoleWithWebIdentityOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "../shapes/PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "../shapes/IDPRejectedClaimException";
import { IDPCommunicationErrorException } from "../shapes/IDPCommunicationErrorException";
import { InvalidIdentityTokenException } from "../shapes/InvalidIdentityTokenException";
import { ExpiredTokenException } from "../shapes/ExpiredTokenException";
import { RegionDisabledException } from "../shapes/RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssumeRoleWithWebIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssumeRoleWithWebIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssumeRoleWithWebIdentityInput
  },
  output: {
    shape: AssumeRoleWithWebIdentityOutput,
    resultWrapper: "AssumeRoleWithWebIdentityResult"
  },
  errors: [
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: PackedPolicyTooLargeException
    },
    {
      shape: IDPRejectedClaimException
    },
    {
      shape: IDPCommunicationErrorException
    },
    {
      shape: InvalidIdentityTokenException
    },
    {
      shape: ExpiredTokenException
    },
    {
      shape: RegionDisabledException
    }
  ]
};
