import { CreateApplicationSnapshotInput } from "../shapes/CreateApplicationSnapshotInput";
import { CreateApplicationSnapshotOutput } from "../shapes/CreateApplicationSnapshotOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
