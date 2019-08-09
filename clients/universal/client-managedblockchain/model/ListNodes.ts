import { ListNodesInput } from "./ListNodesInput";
import { ListNodesOutput } from "./ListNodesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
