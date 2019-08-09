import { DeleteApplicationSnapshotInput } from "./DeleteApplicationSnapshotInput";
import { DeleteApplicationSnapshotOutput } from "./DeleteApplicationSnapshotOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
