import { DescribeReplicationSubnetGroupsInput } from "./DescribeReplicationSubnetGroupsInput";
import { DescribeReplicationSubnetGroupsOutput } from "./DescribeReplicationSubnetGroupsOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReplicationSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationSubnetGroupsInput
  },
  output: {
    shape: DescribeReplicationSubnetGroupsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
