import { DeleteDedicatedIpPoolInput } from "../shapes/DeleteDedicatedIpPoolInput";
import { DeleteDedicatedIpPoolOutput } from "../shapes/DeleteDedicatedIpPoolOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDedicatedIpPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDedicatedIpPool",
  http: {
    method: "DELETE",
    requestUri: "/v1/email/dedicated-ip-pools/{PoolName}"
  },
  input: {
    shape: DeleteDedicatedIpPoolInput
  },
  output: {
    shape: DeleteDedicatedIpPoolOutput
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
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
