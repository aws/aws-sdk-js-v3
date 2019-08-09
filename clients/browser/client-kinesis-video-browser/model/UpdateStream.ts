import { UpdateStreamInput } from "./UpdateStreamInput";
import { UpdateStreamOutput } from "./UpdateStreamOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { VersionMismatchException } from "./VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStream",
  http: {
    method: "POST",
    requestUri: "/updateStream"
  },
  input: {
    shape: UpdateStreamInput
  },
  output: {
    shape: UpdateStreamOutput
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
