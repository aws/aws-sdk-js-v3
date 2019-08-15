import { AssumeRoleInput } from "../shapes/AssumeRoleInput";
import { AssumeRoleOutput } from "../shapes/AssumeRoleOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "../shapes/PackedPolicyTooLargeException";
import { RegionDisabledException } from "../shapes/RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssumeRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssumeRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssumeRoleInput
  },
  output: {
    shape: AssumeRoleOutput,
    resultWrapper: "AssumeRoleResult"
  },
  errors: [
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: PackedPolicyTooLargeException
    },
    {
      shape: RegionDisabledException
    }
  ]
};
