import { CreateDedicatedIpPoolInput } from "./CreateDedicatedIpPoolInput";
import { CreateDedicatedIpPoolOutput } from "./CreateDedicatedIpPoolOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
