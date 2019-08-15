import { TestFailoverInput } from "../shapes/TestFailoverInput";
import { TestFailoverOutput } from "../shapes/TestFailoverOutput";
import { APICallRateForCustomerExceededFault } from "../shapes/APICallRateForCustomerExceededFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { NodeGroupNotFoundFault } from "../shapes/NodeGroupNotFoundFault";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { TestFailoverNotAvailableFault } from "../shapes/TestFailoverNotAvailableFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestFailover: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestFailover",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestFailoverInput
  },
  output: {
    shape: TestFailoverOutput,
    resultWrapper: "TestFailoverResult"
  },
  errors: [
    {
      shape: APICallRateForCustomerExceededFault
    },
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: InvalidReplicationGroupStateFault
    },
    {
      shape: NodeGroupNotFoundFault
    },
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: TestFailoverNotAvailableFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
