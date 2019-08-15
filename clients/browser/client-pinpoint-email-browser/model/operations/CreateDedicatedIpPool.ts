import { CreateDedicatedIpPoolInput } from "../shapes/CreateDedicatedIpPoolInput";
import { CreateDedicatedIpPoolOutput } from "../shapes/CreateDedicatedIpPoolOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDedicatedIpPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDedicatedIpPool",
  http: {
    method: "POST",
    requestUri: "/v1/email/dedicated-ip-pools"
  },
  input: {
    shape: CreateDedicatedIpPoolInput
  },
  output: {
    shape: CreateDedicatedIpPoolOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
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
