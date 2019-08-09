import { DeleteDedicatedIpPoolInput } from "./DeleteDedicatedIpPoolInput";
import { DeleteDedicatedIpPoolOutput } from "./DeleteDedicatedIpPoolOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
