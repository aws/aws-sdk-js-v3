import { DescribeListenersInput } from "./DescribeListenersInput";
import { DescribeListenersOutput } from "./DescribeListenersOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
