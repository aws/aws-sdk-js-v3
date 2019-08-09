import { GetNetworkInput } from "./GetNetworkInput";
import { GetNetworkOutput } from "./GetNetworkOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNetwork: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNetwork",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}"
  },
  input: {
    shape: GetNetworkInput
  },
  output: {
    shape: GetNetworkOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
