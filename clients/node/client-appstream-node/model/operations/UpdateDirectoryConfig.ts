import { UpdateDirectoryConfigInput } from "../shapes/UpdateDirectoryConfigInput";
import { UpdateDirectoryConfigOutput } from "../shapes/UpdateDirectoryConfigOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDirectoryConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDirectoryConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDirectoryConfigInput
  },
  output: {
    shape: UpdateDirectoryConfigOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
