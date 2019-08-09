import { GetDataEndpointInput } from "./GetDataEndpointInput";
import { GetDataEndpointOutput } from "./GetDataEndpointOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDataEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataEndpoint",
  http: {
    method: "POST",
    requestUri: "/getDataEndpoint"
  },
  input: {
    shape: GetDataEndpointInput
  },
  output: {
    shape: GetDataEndpointOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
