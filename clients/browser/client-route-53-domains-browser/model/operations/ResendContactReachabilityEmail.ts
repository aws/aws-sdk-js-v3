import { ResendContactReachabilityEmailInput } from "../shapes/ResendContactReachabilityEmailInput";
import { ResendContactReachabilityEmailOutput } from "../shapes/ResendContactReachabilityEmailOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResendContactReachabilityEmail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResendContactReachabilityEmail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResendContactReachabilityEmailInput
  },
  output: {
    shape: ResendContactReachabilityEmailOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: OperationLimitExceeded
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
