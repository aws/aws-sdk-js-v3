import { UpdateDomainNameInput } from "../shapes/UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "../shapes/UpdateDomainNameOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainName",
  http: {
    method: "PATCH",
    requestUri: "/v2/domainnames/{domainName}"
  },
  input: {
    shape: UpdateDomainNameInput
  },
  output: {
    shape: UpdateDomainNameOutput
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
