import { DisableDomainAutoRenewInput } from "./DisableDomainAutoRenewInput";
import { DisableDomainAutoRenewOutput } from "./DisableDomainAutoRenewOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableDomainAutoRenew: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableDomainAutoRenew",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableDomainAutoRenewInput
  },
  output: {
    shape: DisableDomainAutoRenewOutput
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
