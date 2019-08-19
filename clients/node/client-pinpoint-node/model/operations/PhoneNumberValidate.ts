import { PhoneNumberValidateInput } from "../shapes/PhoneNumberValidateInput";
import { PhoneNumberValidateOutput } from "../shapes/PhoneNumberValidateOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PhoneNumberValidate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PhoneNumberValidate",
  http: {
    method: "POST",
    requestUri: "/v1/phone/number/validate"
  },
  input: {
    shape: PhoneNumberValidateInput
  },
  output: {
    shape: PhoneNumberValidateOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
