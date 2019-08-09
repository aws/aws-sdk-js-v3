import { PutApplicationPolicyInput } from "./PutApplicationPolicyInput";
import { PutApplicationPolicyOutput } from "./PutApplicationPolicyOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
