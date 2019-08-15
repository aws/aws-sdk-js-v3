import { GetApplicationPolicyInput } from "../shapes/GetApplicationPolicyInput";
import { GetApplicationPolicyOutput } from "../shapes/GetApplicationPolicyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApplicationPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplicationPolicy",
  http: {
    method: "GET",
    requestUri: "/applications/{applicationId}/policy"
  },
  input: {
    shape: GetApplicationPolicyInput
  },
  output: {
    shape: GetApplicationPolicyOutput
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
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
