import { AddCustomAttributesInput } from "../shapes/AddCustomAttributesInput";
import { AddCustomAttributesOutput } from "../shapes/AddCustomAttributesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserImportInProgressException } from "../shapes/UserImportInProgressException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
