import { ResendContactReachabilityEmailInput } from "./ResendContactReachabilityEmailInput";
import { ResendContactReachabilityEmailOutput } from "./ResendContactReachabilityEmailOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
