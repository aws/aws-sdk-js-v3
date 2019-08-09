import { GetNodeInput } from "./GetNodeInput";
import { GetNodeOutput } from "./GetNodeOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNode",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/members/{memberId}/nodes/{nodeId}"
  },
  input: {
    shape: GetNodeInput
  },
  output: {
    shape: GetNodeOutput
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
