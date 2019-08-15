import { PutApplicationPolicyInput } from "../shapes/PutApplicationPolicyInput";
import { PutApplicationPolicyOutput } from "../shapes/PutApplicationPolicyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutApplicationPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutApplicationPolicy",
  http: {
    method: "PUT",
    requestUri: "/applications/{applicationId}/policy"
  },
  input: {
    shape: PutApplicationPolicyInput
  },
  output: {
    shape: PutApplicationPolicyOutput
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
