import { PutAccountDedicatedIpWarmupAttributesInput } from "../shapes/PutAccountDedicatedIpWarmupAttributesInput";
import { PutAccountDedicatedIpWarmupAttributesOutput } from "../shapes/PutAccountDedicatedIpWarmupAttributesOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAccountDedicatedIpWarmupAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAccountDedicatedIpWarmupAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/account/dedicated-ips/warmup"
  },
  input: {
    shape: PutAccountDedicatedIpWarmupAttributesInput
  },
  output: {
    shape: PutAccountDedicatedIpWarmupAttributesOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
