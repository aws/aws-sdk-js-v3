import { ListUserHierarchyGroupsInput } from "../shapes/ListUserHierarchyGroupsInput";
import { ListUserHierarchyGroupsOutput } from "../shapes/ListUserHierarchyGroupsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
