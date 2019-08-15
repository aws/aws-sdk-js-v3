import { GetMediaInput } from "../shapes/GetMediaInput";
import { GetMediaOutput } from "../shapes/GetMediaOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidEndpointException } from "../shapes/InvalidEndpointException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { ConnectionLimitExceededException } from "../shapes/ConnectionLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
