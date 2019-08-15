import { GetNetworkInput } from "../shapes/GetNetworkInput";
import { GetNetworkOutput } from "../shapes/GetNetworkOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
