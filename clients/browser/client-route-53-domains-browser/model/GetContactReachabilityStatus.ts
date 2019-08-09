import { GetContactReachabilityStatusInput } from "./GetContactReachabilityStatusInput";
import { GetContactReachabilityStatusOutput } from "./GetContactReachabilityStatusOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetContactReachabilityStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContactReachabilityStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContactReachabilityStatusInput
  },
  output: {
    shape: GetContactReachabilityStatusOutput
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
