import { PutDedicatedIpWarmupAttributesInput } from "./PutDedicatedIpWarmupAttributesInput";
import { PutDedicatedIpWarmupAttributesOutput } from "./PutDedicatedIpWarmupAttributesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutDedicatedIpWarmupAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDedicatedIpWarmupAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/email/dedicated-ips/{IP}/warmup"
  },
  input: {
    shape: PutDedicatedIpWarmupAttributesInput
  },
  output: {
    shape: PutDedicatedIpWarmupAttributesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
