import { AssumeRoleInput } from "./AssumeRoleInput";
import { AssumeRoleOutput } from "./AssumeRoleOutput";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { RegionDisabledException } from "./RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
