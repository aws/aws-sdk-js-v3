import { DeleteDomainNameInput } from "./DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "./DeleteDomainNameOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDomainName",
  http: {
    method: "DELETE",
    requestUri: "/v2/domainnames/{domainName}"
  },
  input: {
    shape: DeleteDomainNameInput
  },
  output: {
    shape: DeleteDomainNameOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
