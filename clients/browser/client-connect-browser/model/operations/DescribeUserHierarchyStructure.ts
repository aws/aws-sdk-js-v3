import { DescribeUserHierarchyStructureInput } from "../shapes/DescribeUserHierarchyStructureInput";
import { DescribeUserHierarchyStructureOutput } from "../shapes/DescribeUserHierarchyStructureOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUserHierarchyStructure: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserHierarchyStructure",
  http: {
    method: "GET",
    requestUri: "/user-hierarchy-structure/{InstanceId}"
  },
  input: {
    shape: DescribeUserHierarchyStructureInput
  },
  output: {
    shape: DescribeUserHierarchyStructureOutput
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
