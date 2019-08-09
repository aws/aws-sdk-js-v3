import { GetApplicationPolicyInput } from "./GetApplicationPolicyInput";
import { GetApplicationPolicyOutput } from "./GetApplicationPolicyOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
