import { DescribeListenersInput } from "../shapes/DescribeListenersInput";
import { DescribeListenersOutput } from "../shapes/DescribeListenersOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeListeners: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeListeners",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeListenersInput
  },
  output: {
    shape: DescribeListenersOutput,
    resultWrapper: "DescribeListenersResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: UnsupportedProtocolException
    }
  ]
};
