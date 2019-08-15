import { ListDedicatedIpPoolsInput } from "../shapes/ListDedicatedIpPoolsInput";
import { ListDedicatedIpPoolsOutput } from "../shapes/ListDedicatedIpPoolsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDedicatedIpPools: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDedicatedIpPools",
  http: {
    method: "GET",
    requestUri: "/v1/email/dedicated-ip-pools"
  },
  input: {
    shape: ListDedicatedIpPoolsInput
  },
  output: {
    shape: ListDedicatedIpPoolsOutput
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
