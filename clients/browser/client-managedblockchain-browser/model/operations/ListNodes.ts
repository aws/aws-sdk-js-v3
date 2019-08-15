import { ListNodesInput } from "../shapes/ListNodesInput";
import { ListNodesOutput } from "../shapes/ListNodesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListNodes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNodes",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/members/{memberId}/nodes"
  },
  input: {
    shape: ListNodesInput
  },
  output: {
    shape: ListNodesOutput
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
