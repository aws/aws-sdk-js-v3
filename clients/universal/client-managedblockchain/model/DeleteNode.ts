import { DeleteNodeInput } from "./DeleteNodeInput";
import { DeleteNodeOutput } from "./DeleteNodeOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNode",
  http: {
    method: "DELETE",
    requestUri: "/networks/{networkId}/members/{memberId}/nodes/{nodeId}"
  },
  input: {
    shape: DeleteNodeInput
  },
  output: {
    shape: DeleteNodeOutput
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
      shape: ResourceNotReadyException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
