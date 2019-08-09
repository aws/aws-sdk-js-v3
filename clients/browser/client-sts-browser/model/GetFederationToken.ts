import { GetFederationTokenInput } from "./GetFederationTokenInput";
import { GetFederationTokenOutput } from "./GetFederationTokenOutput";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { RegionDisabledException } from "./RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFederationToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFederationToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFederationTokenInput
  },
  output: {
    shape: GetFederationTokenOutput,
    resultWrapper: "GetFederationTokenResult"
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
