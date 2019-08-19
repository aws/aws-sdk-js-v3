import { DeleteStreamInput } from "../shapes/DeleteStreamInput";
import { DeleteStreamOutput } from "../shapes/DeleteStreamOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStream",
  http: {
    method: "POST",
    requestUri: "/deleteStream"
  },
  input: {
    shape: DeleteStreamInput
  },
  output: {
    shape: DeleteStreamOutput
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
      shape: NotAuthorizedException
    },
    {
      shape: VersionMismatchException
    }
  ]
};
