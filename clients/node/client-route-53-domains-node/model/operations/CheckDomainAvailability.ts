import { CheckDomainAvailabilityInput } from "../shapes/CheckDomainAvailabilityInput";
import { CheckDomainAvailabilityOutput } from "../shapes/CheckDomainAvailabilityOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CheckDomainAvailability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CheckDomainAvailability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CheckDomainAvailabilityInput
  },
  output: {
    shape: CheckDomainAvailabilityOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
