import { UpdateDataRetentionInput } from "../shapes/UpdateDataRetentionInput";
import { UpdateDataRetentionOutput } from "../shapes/UpdateDataRetentionOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDataRetention: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDataRetention",
  http: {
    method: "POST",
    requestUri: "/updateDataRetention"
  },
  input: {
    shape: UpdateDataRetentionInput
  },
  output: {
    shape: UpdateDataRetentionOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: VersionMismatchException
    }
  ]
};
