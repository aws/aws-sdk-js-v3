import { DeletePermissionInput } from "./DeletePermissionInput";
import { DeletePermissionOutput } from "./DeletePermissionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePermissionInput
  },
  output: {
    shape: DeletePermissionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: RequestFailedException
    }
  ]
};
