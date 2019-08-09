import { UpdateDirectoryConfigInput } from "./UpdateDirectoryConfigInput";
import { UpdateDirectoryConfigOutput } from "./UpdateDirectoryConfigOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
