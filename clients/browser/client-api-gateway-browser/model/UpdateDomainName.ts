import { UpdateDomainNameInput } from "./UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "./UpdateDomainNameOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
