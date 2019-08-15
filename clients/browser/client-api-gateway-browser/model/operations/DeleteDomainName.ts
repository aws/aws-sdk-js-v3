import { DeleteDomainNameInput } from "../shapes/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "../shapes/DeleteDomainNameOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDomainName",
  http: {
    method: "DELETE",
    requestUri: "/domainnames/{domain_name}"
  },
  input: {
    shape: DeleteDomainNameInput
  },
  output: {
    shape: DeleteDomainNameOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
