import { UpdateDomainNameInput } from "./UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "./UpdateDomainNameOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
