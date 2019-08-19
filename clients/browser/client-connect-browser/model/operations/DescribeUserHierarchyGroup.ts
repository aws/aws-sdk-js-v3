import { DescribeUserHierarchyGroupInput } from "../shapes/DescribeUserHierarchyGroupInput";
import { DescribeUserHierarchyGroupOutput } from "../shapes/DescribeUserHierarchyGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
