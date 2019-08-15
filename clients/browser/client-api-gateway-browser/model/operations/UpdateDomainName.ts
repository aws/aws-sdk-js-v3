import { UpdateDomainNameInput } from "../shapes/UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "../shapes/UpdateDomainNameOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainName",
  http: {
    method: "PATCH",
    requestUri: "/domainnames/{domain_name}"
  },
  input: {
    shape: UpdateDomainNameInput
  },
  output: {
    shape: UpdateDomainNameOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
