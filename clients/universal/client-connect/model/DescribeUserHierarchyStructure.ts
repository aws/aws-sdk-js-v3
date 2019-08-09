import { DescribeUserHierarchyStructureInput } from "./DescribeUserHierarchyStructureInput";
import { DescribeUserHierarchyStructureOutput } from "./DescribeUserHierarchyStructureOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
