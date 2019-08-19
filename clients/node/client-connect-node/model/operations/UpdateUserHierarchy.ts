import { UpdateUserHierarchyInput } from "../shapes/UpdateUserHierarchyInput";
import { UpdateUserHierarchyOutput } from "../shapes/UpdateUserHierarchyOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserHierarchy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserHierarchy",
  http: {
    method: "POST",
    requestUri: "/users/{InstanceId}/{UserId}/hierarchy"
  },
  input: {
    shape: UpdateUserHierarchyInput
  },
  output: {
    shape: UpdateUserHierarchyOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
