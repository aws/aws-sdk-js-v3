import { CreateApplicationSnapshotInput } from "./CreateApplicationSnapshotInput";
import { CreateApplicationSnapshotOutput } from "./CreateApplicationSnapshotOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateApplicationSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplicationSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationSnapshotInput
  },
  output: {
    shape: CreateApplicationSnapshotOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
