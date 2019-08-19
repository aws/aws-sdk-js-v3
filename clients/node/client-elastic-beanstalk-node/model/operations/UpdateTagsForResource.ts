import { UpdateTagsForResourceInput } from "../shapes/UpdateTagsForResourceInput";
import { UpdateTagsForResourceOutput } from "../shapes/UpdateTagsForResourceOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "../shapes/ResourceTypeNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTagsForResourceInput
  },
  output: {
    shape: UpdateTagsForResourceOutput
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: OperationInProgressException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceTypeNotSupportedException
    }
  ]
};
