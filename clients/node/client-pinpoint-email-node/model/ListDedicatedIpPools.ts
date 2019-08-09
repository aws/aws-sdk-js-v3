import { ListDedicatedIpPoolsInput } from "./ListDedicatedIpPoolsInput";
import { ListDedicatedIpPoolsOutput } from "./ListDedicatedIpPoolsOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
