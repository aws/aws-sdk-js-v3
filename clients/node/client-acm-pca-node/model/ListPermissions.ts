import { ListPermissionsInput } from "./ListPermissionsInput";
import { ListPermissionsOutput } from "./ListPermissionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
