import { AssumeRoleWithSAMLInput } from "../shapes/AssumeRoleWithSAMLInput";
import { AssumeRoleWithSAMLOutput } from "../shapes/AssumeRoleWithSAMLOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "../shapes/PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "../shapes/IDPRejectedClaimException";
import { InvalidIdentityTokenException } from "../shapes/InvalidIdentityTokenException";
import { ExpiredTokenException } from "../shapes/ExpiredTokenException";
import { RegionDisabledException } from "../shapes/RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssumeRoleWithSAML: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssumeRoleWithSAML",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssumeRoleWithSAMLInput
  },
  output: {
    shape: AssumeRoleWithSAMLOutput,
    resultWrapper: "AssumeRoleWithSAMLResult"
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
