import { DeleteDirectoryConfigInput } from "./DeleteDirectoryConfigInput";
import { DeleteDirectoryConfigOutput } from "./DeleteDirectoryConfigOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDirectoryConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectoryConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDirectoryConfigInput
  },
  output: {
    shape: DeleteDirectoryConfigOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
