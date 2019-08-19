import { DescribeReplicationGroupsInput } from "../shapes/DescribeReplicationGroupsInput";
import { DescribeReplicationGroupsOutput } from "../shapes/DescribeReplicationGroupsOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReplicationGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationGroupsInput
  },
  output: {
    shape: DescribeReplicationGroupsOutput,
    resultWrapper: "DescribeReplicationGroupsResult"
  },
  errors: [
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
