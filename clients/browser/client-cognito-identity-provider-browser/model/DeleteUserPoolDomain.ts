import { DeleteUserPoolDomainInput } from "./DeleteUserPoolDomainInput";
import { DeleteUserPoolDomainOutput } from "./DeleteUserPoolDomainOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUserPoolDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserPoolDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserPoolDomainInput
  },
  output: {
    shape: DeleteUserPoolDomainOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
