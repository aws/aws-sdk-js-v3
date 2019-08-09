import { GetDedicatedIpInput } from "./GetDedicatedIpInput";
import { GetDedicatedIpOutput } from "./GetDedicatedIpOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
