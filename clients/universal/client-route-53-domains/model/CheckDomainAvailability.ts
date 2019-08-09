import { CheckDomainAvailabilityInput } from "./CheckDomainAvailabilityInput";
import { CheckDomainAvailabilityOutput } from "./CheckDomainAvailabilityOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
