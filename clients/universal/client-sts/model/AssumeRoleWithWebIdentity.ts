import { AssumeRoleWithWebIdentityInput } from "./AssumeRoleWithWebIdentityInput";
import { AssumeRoleWithWebIdentityOutput } from "./AssumeRoleWithWebIdentityOutput";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "./IDPRejectedClaimException";
import { IDPCommunicationErrorException } from "./IDPCommunicationErrorException";
import { InvalidIdentityTokenException } from "./InvalidIdentityTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { RegionDisabledException } from "./RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
