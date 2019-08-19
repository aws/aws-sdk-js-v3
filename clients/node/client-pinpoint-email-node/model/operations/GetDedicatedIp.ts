import { GetDedicatedIpInput } from "../shapes/GetDedicatedIpInput";
import { GetDedicatedIpOutput } from "../shapes/GetDedicatedIpOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDedicatedIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDedicatedIp",
  http: {
    method: "GET",
    requestUri: "/v1/email/dedicated-ips/{IP}"
  },
  input: {
    shape: GetDedicatedIpInput
  },
  output: {
    shape: GetDedicatedIpOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    }
  ]
};
