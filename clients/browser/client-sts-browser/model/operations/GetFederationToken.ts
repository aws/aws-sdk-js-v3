import { GetFederationTokenInput } from "../shapes/GetFederationTokenInput";
import { GetFederationTokenOutput } from "../shapes/GetFederationTokenOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "../shapes/PackedPolicyTooLargeException";
import { RegionDisabledException } from "../shapes/RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
