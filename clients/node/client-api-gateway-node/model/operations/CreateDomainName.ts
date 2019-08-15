import { CreateDomainNameInput } from "../shapes/CreateDomainNameInput";
import { CreateDomainNameOutput } from "../shapes/CreateDomainNameOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDomainName",
  http: {
    method: "POST",
    requestUri: "/domainnames"
  },
  input: {
    shape: CreateDomainNameInput
  },
  output: {
    shape: CreateDomainNameOutput
  },
  errors: [
    {
      shape: UnauthorizedException
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
