import { GetSessionTokenInput } from "./GetSessionTokenInput";
import { GetSessionTokenOutput } from "./GetSessionTokenOutput";
import { RegionDisabledException } from "./RegionDisabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSessionToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSessionToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSessionTokenInput
  },
  output: {
    shape: GetSessionTokenOutput,
    resultWrapper: "GetSessionTokenResult"
  },
  errors: [
    {
      shape: RegionDisabledException
    }
  ]
};
