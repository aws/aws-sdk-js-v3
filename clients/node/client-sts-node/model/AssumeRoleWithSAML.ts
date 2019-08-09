import { AssumeRoleWithSAMLInput } from "./AssumeRoleWithSAMLInput";
import { AssumeRoleWithSAMLOutput } from "./AssumeRoleWithSAMLOutput";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "./IDPRejectedClaimException";
import { InvalidIdentityTokenException } from "./InvalidIdentityTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { RegionDisabledException } from "./RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
