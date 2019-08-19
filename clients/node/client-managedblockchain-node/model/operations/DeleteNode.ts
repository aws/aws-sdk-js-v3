import { DeleteNodeInput } from "../shapes/DeleteNodeInput";
import { DeleteNodeOutput } from "../shapes/DeleteNodeOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotReadyException } from "../shapes/ResourceNotReadyException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
