import { UpdateUserHierarchyInput } from "./UpdateUserHierarchyInput";
import { UpdateUserHierarchyOutput } from "./UpdateUserHierarchyOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
