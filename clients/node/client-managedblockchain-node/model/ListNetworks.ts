import { ListNetworksInput } from "./ListNetworksInput";
import { ListNetworksOutput } from "./ListNetworksOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
