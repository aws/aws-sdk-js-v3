import { CreateDomainNameInput } from "./CreateDomainNameInput";
import { CreateDomainNameOutput } from "./CreateDomainNameOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDomainName",
  http: {
    method: "POST",
    requestUri: "/v2/domainnames"
  },
  input: {
    shape: CreateDomainNameInput
  },
  output: {
    shape: CreateDomainNameOutput
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
      shape: ConflictException
    }
  ]
};
