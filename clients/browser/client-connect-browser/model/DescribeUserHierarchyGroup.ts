import { DescribeUserHierarchyGroupInput } from "./DescribeUserHierarchyGroupInput";
import { DescribeUserHierarchyGroupOutput } from "./DescribeUserHierarchyGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUserHierarchyGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserHierarchyGroup",
  http: {
    method: "GET",
    requestUri: "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}"
  },
  input: {
    shape: DescribeUserHierarchyGroupInput
  },
  output: {
    shape: DescribeUserHierarchyGroupOutput
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
