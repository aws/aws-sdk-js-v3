import { CheckDomainTransferabilityInput } from "../shapes/CheckDomainTransferabilityInput";
import { CheckDomainTransferabilityOutput } from "../shapes/CheckDomainTransferabilityOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CheckDomainTransferability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CheckDomainTransferability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CheckDomainTransferabilityInput
  },
  output: {
    shape: CheckDomainTransferabilityOutput
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
