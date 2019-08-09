import { DeleteStreamInput } from "./DeleteStreamInput";
import { DeleteStreamOutput } from "./DeleteStreamOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { VersionMismatchException } from "./VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
