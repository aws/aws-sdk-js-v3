import { AddCustomAttributesInput } from "./AddCustomAttributesInput";
import { AddCustomAttributesOutput } from "./AddCustomAttributesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserImportInProgressException } from "./UserImportInProgressException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddCustomAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddCustomAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddCustomAttributesInput
  },
  output: {
    shape: AddCustomAttributesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserImportInProgressException
    },
    {
      shape: InternalErrorException
    }
  ]
};
