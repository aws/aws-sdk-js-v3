import { UpdateTagsForResourceInput } from "./UpdateTagsForResourceInput";
import { UpdateTagsForResourceOutput } from "./UpdateTagsForResourceOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationInProgressException } from "./OperationInProgressException";
import { TooManyTagsException } from "./TooManyTagsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
