import { GetMediaInput } from "./GetMediaInput";
import { GetMediaOutput } from "./GetMediaOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidEndpointException } from "./InvalidEndpointException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { ConnectionLimitExceededException } from "./ConnectionLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMedia: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMedia",
  http: {
    method: "POST",
    requestUri: "/getMedia"
  },
  input: {
    shape: GetMediaInput
  },
  output: {
    shape: GetMediaOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidEndpointException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: ConnectionLimitExceededException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
