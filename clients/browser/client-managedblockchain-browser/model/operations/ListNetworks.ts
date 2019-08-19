import { ListNetworksInput } from "../shapes/ListNetworksInput";
import { ListNetworksOutput } from "../shapes/ListNetworksOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListNetworks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNetworks",
  http: {
    method: "GET",
    requestUri: "/networks"
  },
  input: {
    shape: ListNetworksInput
  },
  output: {
    shape: ListNetworksOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
