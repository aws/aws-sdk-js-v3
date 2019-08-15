import { GetContactReachabilityStatusInput } from "../shapes/GetContactReachabilityStatusInput";
import { GetContactReachabilityStatusOutput } from "../shapes/GetContactReachabilityStatusOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
