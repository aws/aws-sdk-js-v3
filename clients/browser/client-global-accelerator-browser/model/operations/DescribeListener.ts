import { DescribeListenerInput } from "../shapes/DescribeListenerInput";
import { DescribeListenerOutput } from "../shapes/DescribeListenerOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeListenerInput
  },
  output: {
    shape: DescribeListenerOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
