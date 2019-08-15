import { DeleteApplicationSnapshotInput } from "../shapes/DeleteApplicationSnapshotInput";
import { DeleteApplicationSnapshotOutput } from "../shapes/DeleteApplicationSnapshotOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplicationSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationSnapshotInput
  },
  output: {
    shape: DeleteApplicationSnapshotOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
