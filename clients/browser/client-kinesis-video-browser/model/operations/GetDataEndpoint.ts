import { GetDataEndpointInput } from "../shapes/GetDataEndpointInput";
import { GetDataEndpointOutput } from "../shapes/GetDataEndpointOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
