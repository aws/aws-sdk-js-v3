import { DeletePermissionInput } from "../shapes/DeletePermissionInput";
import { DeletePermissionOutput } from "../shapes/DeletePermissionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
