import { ListPermissionsInput } from "../shapes/ListPermissionsInput";
import { ListPermissionsOutput } from "../shapes/ListPermissionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPermissionsInput
  },
  output: {
    shape: ListPermissionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: RequestFailedException
    }
  ]
};
