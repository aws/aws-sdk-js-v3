import { DeleteDomainNameInput } from "./DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "./DeleteDomainNameOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
