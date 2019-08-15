import { GetDedicatedIpsInput } from "../shapes/GetDedicatedIpsInput";
import { GetDedicatedIpsOutput } from "../shapes/GetDedicatedIpsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDedicatedIps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDedicatedIps",
  http: {
    method: "GET",
    requestUri: "/v1/email/dedicated-ips"
  },
  input: {
    shape: GetDedicatedIpsInput
  },
  output: {
    shape: GetDedicatedIpsOutput
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
