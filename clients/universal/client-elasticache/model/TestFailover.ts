import { TestFailoverInput } from "./TestFailoverInput";
import { TestFailoverOutput } from "./TestFailoverOutput";
import { APICallRateForCustomerExceededFault } from "./APICallRateForCustomerExceededFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { NodeGroupNotFoundFault } from "./NodeGroupNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { TestFailoverNotAvailableFault } from "./TestFailoverNotAvailableFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
