import { PutDedicatedIpInPoolInput } from "./PutDedicatedIpInPoolInput";
import { PutDedicatedIpInPoolOutput } from "./PutDedicatedIpInPoolOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
