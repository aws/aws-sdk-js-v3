import { DeleteDomainNameInput } from "../shapes/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "../shapes/DeleteDomainNameOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
