import { ListUserHierarchyGroupsInput } from "./ListUserHierarchyGroupsInput";
import { ListUserHierarchyGroupsOutput } from "./ListUserHierarchyGroupsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUserHierarchyGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserHierarchyGroups",
  http: {
    method: "GET",
    requestUri: "/user-hierarchy-groups-summary/{InstanceId}"
  },
  input: {
    shape: ListUserHierarchyGroupsInput
  },
  output: {
    shape: ListUserHierarchyGroupsOutput
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
