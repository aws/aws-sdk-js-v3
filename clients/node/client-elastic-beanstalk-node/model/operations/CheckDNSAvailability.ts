import { CheckDNSAvailabilityInput } from "../shapes/CheckDNSAvailabilityInput";
import { CheckDNSAvailabilityOutput } from "../shapes/CheckDNSAvailabilityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CheckDNSAvailability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CheckDNSAvailability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CheckDNSAvailabilityInput
  },
  output: {
    shape: CheckDNSAvailabilityOutput,
    resultWrapper: "CheckDNSAvailabilityResult"
  },
  errors: []
};
