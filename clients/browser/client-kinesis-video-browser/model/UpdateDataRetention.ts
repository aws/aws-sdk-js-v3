import { UpdateDataRetentionInput } from "./UpdateDataRetentionInput";
import { UpdateDataRetentionOutput } from "./UpdateDataRetentionOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { VersionMismatchException } from "./VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
