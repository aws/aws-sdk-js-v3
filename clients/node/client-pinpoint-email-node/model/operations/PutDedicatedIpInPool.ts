import { PutDedicatedIpInPoolInput } from "../shapes/PutDedicatedIpInPoolInput";
import { PutDedicatedIpInPoolOutput } from "../shapes/PutDedicatedIpInPoolOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutDedicatedIpInPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDedicatedIpInPool",
  http: {
    method: "PUT",
    requestUri: "/v1/email/dedicated-ips/{IP}/pool"
  },
  input: {
    shape: PutDedicatedIpInPoolInput
  },
  output: {
    shape: PutDedicatedIpInPoolOutput
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
