import { GetNodeInput } from "../shapes/GetNodeInput";
import { GetNodeOutput } from "../shapes/GetNodeOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
