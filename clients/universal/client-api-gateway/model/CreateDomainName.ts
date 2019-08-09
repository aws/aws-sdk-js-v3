import { CreateDomainNameInput } from "./CreateDomainNameInput";
import { CreateDomainNameOutput } from "./CreateDomainNameOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
